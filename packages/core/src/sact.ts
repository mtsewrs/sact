import * as uws from 'uWebSockets.js';
export * from 'uWebSockets.js';

import { CallbackFunction, Options } from './types';
import { handler } from './handler';

const { us_listen_socket_close } = uws;

export class Sact<REQ = unknown, RES = unknown> {
  /**
   * uws App or SSLApp instance, use if you have custom needs
   */
  app: uws.TemplatedApp;
  /**
   * @ignore
   */
  middlewares: CallbackFunction<REQ, RES>[] = [];
  /**
   * @ignore
   */
  plugins: any = [];
  /**
   * @ignore
   */
  token?: uws.us_listen_socket | null;
  /**
   * the port the app is listening on
   */
  port?: number;
  /**
   * uws module
   */
  uws = uws;

  constructor(options: Options = {}) {
    const { ssl, ...opt } = options;

    if (!!ssl) {
      this.app = uws.SSLApp(opt);
    } else {
      this.app = uws.App(opt);
    }
  }

  /**
   * only needed for supertest
   * @ignore
   */
  address() {
    return { port: this.port };
  }

  /**
   * stop the server
   */
  close() {
    if (this.token) {
      us_listen_socket_close(this.token);
      this.token = null;
    }
  }

  /**
   *
   * @param port number, defaults to 0
   * @returns Promise with port, listen token and url
   */
  async listen(port = 0): Promise<{
    port: number;
    token: unknown;
    url: string;
  }> {
    return new Promise((resolve, reject) => {
      this.app.listen(port, (token) => {
        if (token) {
          this.port = port = this.uws.us_socket_local_port(token);
          this.token = token;
          resolve({
            port,
            token,
            url: `localhost:${port}`,
          });
        } else {
          reject('[sact] Failed to listen');
        }
      });
    });
  }

  use(func: CallbackFunction<REQ, RES>) {
    this.middlewares.push(func);

    return this;
  }

  register<T>(plugin: PLuginFunction<T>, opt?: T): this {
    const result = plugin(this, opt);
    if (result && result instanceof Promise) {
      this.plugins.push(result);
    }
    return this;
  }

  async ready() {
    for (const plugin of this.plugins) {
      if (plugin && plugin instanceof Promise) {
        await plugin;
      }
    }
  }

  numSubscribers(topic: uws.RecognizedString): number {
    return this.app.numSubscribers(topic);
  }

  get(path: string, callback: CallbackFunction<REQ, RES>) {
    this.app.get(path, handler(callback, this.middlewares));

    return this;
  }

  options(path: string, callback: CallbackFunction<REQ, RES>) {
    this.app.options(path, handler(callback, this.middlewares));

    return this;
  }

  post(path: string, callback: CallbackFunction<REQ, RES>) {
    this.app.post(path, handler(callback, this.middlewares));

    return this;
  }

  any(path: string, callback: CallbackFunction<REQ, RES>) {
    this.app.any(path, handler(callback, this.middlewares));

    return this;
  }

  ws(path: string, opt: uws.WebSocketBehavior) {
    this.app.ws(path, opt);
    return this;
  }

  publish(
    topic: uws.RecognizedString,
    message: uws.RecognizedString,
    isBinary?: boolean,
    compress?: boolean
  ) {
    this.app.publish(topic, message, isBinary, compress);
    return this;
  }
}

export type PLuginFunction<OPTIONS = any> = (
  sact: any,
  opt?: OPTIONS
) => Promise<any> | void;
