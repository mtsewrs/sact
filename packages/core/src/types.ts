import { AppOptions, HttpResponse, HttpRequest } from 'uWebSockets.js';

export interface Options extends AppOptions {
  ssl?: boolean;
}

/**
 * Callback function for routes
 */
export type CallbackFunction<REQ = unknown, RES = unknown> = (
  req: Request<REQ>,
  res: Response<RES>
) => void | Promise<any>;

export type Response<T = unknown> = IResponse & T;

export interface IResponse extends HttpResponse {
  statusCode: number;
}

export type Request<T = unknown> = HttpRequest & T;
