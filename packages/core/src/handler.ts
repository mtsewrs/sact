import { HttpRequest, HttpResponse } from 'uWebSockets.js';
import { trySync } from './handleResponse';
import { CallbackFunction, Request, Response } from './types';

/**
 * @ignore
 */
export const handler = <REQ, RES>(
  callback: CallbackFunction<REQ, RES>,
  middlewares: CallbackFunction<REQ, RES>[]
) => (res: HttpResponse, req: HttpRequest): void => {
  res.onAborted(() => {
    res.aborted = true;
  });

  const middlewarePromises = [];
  if (!!middlewares.length) {
    for (let i = 0; i < middlewares.length; i++) {
      const middleware = middlewares[i];
      const promise = middleware(req as Request<REQ>, res as Response<RES>);
      if (promise instanceof Promise) {
        middlewarePromises.push(promise);
      }
    }
  }

  if (!!middlewarePromises.length) {
    Promise.all(middlewarePromises).then(() => {
      return trySync(res, () =>
        callback(req as Request<REQ>, res as Response<RES>)
      );
    });
  } else {
    trySync(res, () => callback(req as Request<REQ>, res as Response<RES>));
  }
};
