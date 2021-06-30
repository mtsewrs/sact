import fs from 'fs';
import util from 'util';
import { createGzip, createBrotliCompress } from 'zlib';
import { Response } from './types';
import { HttpError } from './http';

const stat = util.promisify(fs.stat);

export const sendFile = async (
  name: string,
  res: Response,
  options: any,
  mime: string
) => {
  const stats = await stat(name);

  res.writeHeader('content-type', mime);
  if (options.cache)
    res.writeHeader('cache-control', 'max-age=0; must-revalidate');
  if (options.compress) {
    res.writeHeader('content-encoding', options.compress);
  }

  const { mtime, size } = stats;
  mtime.setMilliseconds(0);

  let stream = fs.createReadStream(name);
  if (options.compress) {
    const compress = {
      gzip: createGzip(),
      br: createBrotliCompress(),
    };
    stream = stream.pipe(compress[options.compress]);
  }

  res.stream = stream;

  stream.on('error', (err) => {
    res.cork(() => {
      if (!res.aborted) {
        stream.destroy();
        res.writeStatus('500');
        res.end(err.message);
      }
    });
  });

  if (options.compress) {
    stream.on('data', (buffer) => {
      res.write(buffer);
    });
    stream.on('end', () => {
      res.end();
    });
  } else {
    await pipeStreamOverResponse(res, stream, size);
  }
};

/* Helper function converting Node.js buffer to ArrayBuffer */
function toArrayBuffer(buffer: Buffer) {
  return buffer.buffer.slice(
    buffer.byteOffset,
    buffer.byteOffset + buffer.byteLength
  );
}

const pipeStreamOverResponse = (
  res: Response,
  stream: any,
  totalSize: number
): Promise<void> =>
  new Promise((resolve, reject) => {
    stream.on('data', (chunk: Buffer) => {
      const ab = toArrayBuffer(chunk);

      let lastOffset = res.getWriteOffset();

      let [ok, done] = res.tryEnd(ab, totalSize);

      if (done) {
        if (res.id === -1) {
          reject(
            new HttpError(
              'ERROR! onAbortedOrFinishedResponse called twice for the same res!',
              500
            )
          );
        } else {
          stream.destroy();
        }

        res.id = -1;
        resolve();
      } else if (!ok) {
        stream.pause();

        res.ab = ab;
        res.abOffset = lastOffset;

        res.onWritable((offset) => {
          let [ok, done] = res.tryEnd(
            res.ab.slice(offset - res.abOffset),
            totalSize
          );
          if (done) {
            if (res.id === -1) {
              reject(
                'ERROR! onAbortedOrFinishedResponse called twice for the same res!'
              );
            } else {
              stream.destroy();
            }

            res.id = -1;
            resolve();
          } else if (ok) {
            stream.resume();
          }
          return ok;
        });
      }
    });
  });
