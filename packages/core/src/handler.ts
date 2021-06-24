import { Response, Request } from './types';

/**
 * @ignore
 */
export const handler =
  (path: string, callback: any, sact: any) =>
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

    res.headers = {};

    res.header = (k: string, v: string) => {
      res.headers[k] = v;
      return res;
    };

    res.setHeader = (k: string, v: string) => {
      res.headers[k] = v;
      return res;
    };

    res.getHeader = (v: string) => {
      return res.headers[v];
    };

    res.send = (
      data?: string,
      /**
       * if you do anything async like promises set this to true
       */
      async = false
    ) => {
      if (!res.aborted) {
        if (async) {
          res.cork(() => {
            const headers = Object.entries(res.headers);
            if (!!headers.length) {
              headers.forEach(([key, value]) => {
                res.writeHeader(key, value);
              });
            }
            res.end(data ? data : '');
          });
        } else {
          const headers = Object.entries(res.headers);
          if (!!headers.length) {
            headers.forEach(([key, value]) => {
              res.writeHeader(key, value);
            });
          }
          res.end(data ? data : '');
        }
      }
      return;
    };

    res.redirect = (path) => {
      res.writeStatus('301');
      res.writeHeader('Location', path);
      res.send();
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
              Object.entries(res.headers).forEach(([key, value]) => {
                res.writeHeader(key, value);
              });
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
                res.end(
                  JSON.stringify({
                    message: error.message,
                    status: error.status,
                    stack: error.stack,
                  })
                );
              });
            }
          } else {
            sact.logger.error(error);
            if (!res.aborted) {
              res.cork(() => {
                res.writeStatus('500');
                res.writeHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    message: error.message,
                    status: 500,
                    stack: error.stack,
                  })
                );
              });
            }
          }
        });
    }

    if (!!middlewarePromises.length) {
      const promise = Promise.all(middlewarePromises).then(() => {
        if (callback[Symbol.toStringTag] === 'AsyncFunction') {
          return callback(req, res, next);
        } else {
          return callback(req, res, next);
        }
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
