import { Readable } from 'stream';
import { HttpResponse } from 'uWebSockets.js';
import { HttpError } from './error';

export function handleStream(res: HttpResponse, readable: Readable) {
  let lastOffset = 0;
  let dataChunk: Buffer | undefined = undefined;

  res
    .onAborted(() => {
      readable.destroy();
    })
    .onWritable((newOffset: number) => {
      let ok = true;
      res.cork(() => {
        if (dataChunk === undefined) {
          return;
        }

        const offsetIncrement = newOffset - lastOffset;
        dataChunk = dataChunk.slice(
          dataChunk.byteOffset + offsetIncrement,
          dataChunk.byteLength - offsetIncrement
        );
        ok = res.write(dataChunk);
        if (ok) {
          dataChunk = undefined;
          readable.resume();
        }
      });
      return ok;
    });

  readable
    .on('error', error => {
      res.cork(() => {
        // @ts-ignore
        if (error.code === 'EBADF') {
          res
            .writeStatus('404 Not Found')
            .writeHeader('Content-Type', 'text/plain')
            .end('File descriptor not found.');
        } else {
          res.writeStatus('500 Internal Server Error').end();
        }
      });
    })
    .on('end', () => res.cork(() => res.end()))
    .once('data', () =>
      res.cork(() =>
        res
          .writeStatus('200 OK')
          .writeHeader('Content-Type', 'application/octet-stream')
      )
    )
    .on('data', chunk => {
      res.cork(() => {
        lastOffset = res.getWriteOffset();
        if (!res.write(chunk)) {
          dataChunk = chunk;
          readable.pause();
        }
      });
    });
}

export function trySync(
  res: HttpResponse,
  cb: () => Promise<any> | any
): void | Promise<any> {
  try {
    const data = cb();
    if (data instanceof Promise) {
      return data
        .then(data => {
          handleSucessResponse(res, data);
        })
        .catch(error => {
          handleFailResponse(res, error);
        });
    }
    handleSucessResponse(res, data);
  } catch (error) {
    handleFailResponse(res, error);
  }
}

function handleSucessResponse(res: HttpResponse, data: any) {
  if (data instanceof Readable) {
    handleStream(res, data);
  } else if (typeof data !== 'undefined') {
    const result = ['array', 'object', 'number'].includes(typeof data)
      ? JSON.stringify(data)
      : data;
    if (!res.aborted) {
      res.cork(() => {
        res.statusCode && res.writeStatus(String(res.statusCode));
        ['array', 'object', 'number'].includes(typeof data) &&
          res.writeHeader('Content-Type', 'application/json');
        res.end(result);
      });
    }
  }
}

function handleFailResponse(res: HttpResponse, err: unknown) {
  // ts cant infer err
  const error = err;
  if (error instanceof HttpError) {
    if (!res.aborted) {
      res.cork(() => {
        res.writeStatus(String(error.status));
        res.writeHeader('Content-Type', 'application/json');
        res.end(
          JSON.stringify({
            error: true,
            message: error.message,
            status: error.status,
            data: error.data,
          })
        );
      });
    }
  } else {
    console.error(error);
    if (!res.aborted) {
      res.cork(() => {
        res.writeStatus('500');
        res.writeHeader('Content-Type', 'application/json');
        res.end(
          JSON.stringify({
            error: true,
            message: error instanceof Error ? error.message : String(error),
            status: 500,
          })
        );
      });
    }
  }
}
