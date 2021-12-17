import { HttpRequest, HttpResponse } from 'uWebSockets.js';
import { Request, Response } from '.';
import { handlePromise } from './handlePromise';
import { CallbackFunction } from './types';

/**
 * @ignore
 */
export const handler =
  <REQ, RES>(
    callback: CallbackFunction<REQ, RES>,
    middlewares: CallbackFunction<REQ, RES>[]
  ) =>
  (res: HttpResponse, req: HttpRequest): void => {
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
      const promise = Promise.all(middlewarePromises).then(() => {
        return callback(req as Request<REQ>, res as Response<RES>);
      });
      handlePromise(res as Response<RES>, promise);
    } else {
      const promise = callback(req as Request<REQ>, res as Response<RES>);
      if (promise instanceof Promise) {
        handlePromise(res as Response<RES>, promise);
      }
    }
  };
