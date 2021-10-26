import { AppOptions, HttpResponse, HttpRequest } from 'uWebSockets.js';

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
) => void | Promise<any>;

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

export type Request<T = { [key: string]: any }> = HttpRequest & T;
