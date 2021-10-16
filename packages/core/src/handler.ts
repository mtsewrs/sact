import { Response, Request } from './types';

function writeHeaders(res: Response) {
  if (!!res.headers.length) {
    res.headers.forEach(([key, value]) => {
      res.writeHeader(key, value);
    });
  }
}

/**
 * @ignore
 */
export const handler =
  (callback: any, sact: any) =>
  (res: Response, req: Request): void => {
    res.onAborted(() => {
      res.aborted = true;
      if (res.stream) {
        res.stream.destroy();
      }
    });

    req.headers = {};

    const next = () => {
      res.next_called = true;
      req.setYield(true);
      return;
    };

    res.headers = [];

    res.header = (k: string, v: string) => {
      res.headers.push([k, v]);
      return res;
    };

    res.getHeader = (key: string) => {
      const h = res.headers.find(([k]) => k === key);
      return h && h[1];
    };

    const middlewarePromises = [];
    if (!!sact.middlewares.length) {
      for (let i = 0; i < sact.middlewares.length; i++) {
        const middleware = sact.middlewares[i];
        if (middleware[Symbol.toStringTag] === 'AsyncFunction') {
          const promise = middleware(req, res, next);
          middlewarePromises.push(promise);
        } else {
          const promise = middleware(req, res, next);
          if (promise instanceof Promise) {
            middlewarePromises.push(promise);
          }
        }
      }
    }

    res.send = (data?: string, async = false) => {
      if (!res.aborted) {
        if (async) {
          res.cork(() => {
            writeHeaders(res);
            res.end(data ? data : '');
          });
        } else {
          writeHeaders(res);
          res.end(data ? data : '');
        }
      }
      return;
    };

    function handlePromise(promise: Promise<any>) {
      promise
        .then((data) => {
          if (res.next_called || typeof data === 'undefined') {
            return;
          }
          const result = ['array', 'object', 'number'].includes(typeof data)
            ? JSON.stringify(data)
            : data;
          if (!res.aborted) {
            res.cork(() => {
              res.statusCode && res.writeStatus(String(res.statusCode));
              writeHeaders(res);
              ['array', 'object', 'number'].includes(typeof data) &&
                res.writeHeader('Content-Type', 'application/json');
              res.end(result);
            });
          }
        })
        .catch((error) => {
          if (error.status) {
            if (!res.aborted) {
              res.cork(() => {
                res.writeStatus(String(error.status));
                res.writeHeader('Content-Type', 'application/json');
                writeHeaders(res);
                res.end(
                  JSON.stringify({
                    error: true,
                    message: error.message,
                    status: error.status,
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
                    message: error.message,
                    status: 500,
                  })
                );
              });
            }
          }
        });
    }

    if (!!middlewarePromises.length) {
      const promise = Promise.all(middlewarePromises).then(() => {
        return callback(req, res, next);
      });
      handlePromise(promise);
    } else {
      if (callback[Symbol.toStringTag] === 'AsyncFunction') {
        const promise = callback(req, res, next);
        handlePromise(promise);
      } else {
        const promise = callback(req, res, next);
        if (promise instanceof Promise) {
          handlePromise(promise);
        }
      }
    }
  };
