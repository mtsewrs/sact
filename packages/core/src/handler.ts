import { handlePromise } from './handlePromise';
import { Response, Request, CallbackFunction } from './types';

/**
 * @ignore
 */
export const handler =
  (callback: CallbackFunction, middlewares: CallbackFunction[]) =>
  (res: Response, req: Request): void => {
    res.onAborted(() => {
      res.aborted = true;
      if (res.stream) {
        res.stream.destroy();
      }
    });

    const middlewarePromises = [];
    if (!!middlewares.length) {
      for (let i = 0; i < middlewares.length; i++) {
        const middleware = middlewares[i];
        if (middleware[Symbol.toStringTag] === 'AsyncFunction') {
          const promise = middleware(req, res);
          middlewarePromises.push(promise);
        } else {
          const promise = middleware(req, res);
          if (promise instanceof Promise) {
            middlewarePromises.push(promise);
          }
        }
      }
    }

    if (!!middlewarePromises.length) {
      const promise = Promise.all(middlewarePromises).then(() => {
        return callback(req, res);
      });
      handlePromise(res, promise);
    } else {
      if (callback[Symbol.toStringTag] === 'AsyncFunction') {
        const promise = callback(req, res);
        handlePromise(res, promise as Promise<any>);
      } else {
        const promise = callback(req, res);
        if (promise instanceof Promise) {
          handlePromise(res, promise);
        }
      }
    }
  };
