import {
  AppOptions,
  HttpResponse,
  HttpRequest,
  TemplatedApp,
} from 'uWebSockets.js';

export interface Options extends AppOptions {
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
  /**
   *
   * This is not like express next, it is to say that this route handler did not handle the route, causing the router to continue looking for a matching route handler, or fail.
   */
  next: () => void
) => Promise<any> | void;

export type Response<T = { [key: string]: any }> = IResponse & T;

export interface IResponse extends HttpResponse {
  /**
   * if you do anything async like promises set async to true, default is false
   */
  send: (data?: string, async?: boolean) => void;
  sendFile: (file: string, res: Response, req: Request) => Promise<void>;
  header: (key: string, value: string) => IResponse;
  headers: [string, string][];
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
