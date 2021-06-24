import { Logger } from 'pino';
import {
  AppOptions,
  HttpResponse,
  HttpRequest,
  TemplatedApp,
} from 'uWebSockets.js';

export type cb = (err?: Error) => void;

export interface Options extends AppOptions {
  logger?: Logger;
  ssl?: boolean;
}

/**
 * Callback function for routes
 */
export type CallbackFunction<
  REQ = { [key: string]: any },
  RES = { [key: string]: any }
> = (
  req: Request<REQ>,
  res: Response<RES>,
  next: () => void
) => Promise<any> | void;

export type Response<T = { [key: string]: any }> = IResponse & T;

export interface IResponse extends HttpResponse {
  send: (data?: string, async?: boolean) => void;
  sendFile: (file: string, res: Response, req: Request) => Promise<void>;
  setHeader: (key: string, value: string) => IResponse;
  header: (key: string, value: string) => IResponse;
  getHeader: (value: string) => string;
  redirect: (path: string) => void;
  aborted: boolean;
  headers: { [key: string]: string };
  statusCode: number;
}

export type Request<T = { [key: string]: any }> = IRequest & T;

export interface IRequest extends HttpRequest {}

export interface Server extends TemplatedApp {
  get(pattern: string, handler: (res: Response, req: Request) => void): Server;
  post(pattern: string, handler: (res: Response, req: Request) => void): Server;
  options(
    pattern: string,
    handler: (res: Response, req: Request) => void
  ): Server;
  del(pattern: string, handler: (res: Response, req: Request) => void): Server;
  patch(
    pattern: string,
    handler: (res: Response, req: Request) => void
  ): Server;
  put(pattern: string, handler: (res: Response, req: Request) => void): Server;
  head(pattern: string, handler: (res: Response, req: Request) => void): Server;
  connect(
    pattern: string,
    handler: (res: Response, req: Request) => void
  ): Server;
  trace(
    pattern: string,
    handler: (res: Response, req: Request) => void
  ): Server;
  any(pattern: string, handler: (res: Response, req: Request) => void): Server;
}
