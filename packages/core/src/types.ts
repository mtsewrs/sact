import { Readable } from 'stream';
import { AppOptions, HttpResponse, HttpRequest } from 'uWebSockets.js';

export interface Options extends AppOptions {
  ssl?: boolean;
}

type ReturnType = any | void | Readable;

/**
 * Callback function for routes
 */
export type CallbackFunction<REQ, RES> = (
  req: Request<REQ>,
  res: Response<RES>
) => ReturnType | Promise<ReturnType>;

export type Response<T = unknown> = IResponse & T;

export interface IResponse extends HttpResponse {
  statusCode: number;
}

export interface IRequest extends HttpRequest {}

export type Request<T = unknown> = IRequest & T;
