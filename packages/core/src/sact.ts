import pino, { Logger } from 'pino';
import * as uws from 'uWebSockets.js';

import { CallbackFunction, Options, Server } from './types';

import { handler } from './handler';

const { us_listen_socket_close } = uws;

export class Sact<REQ = unknown, RES = unknown> {
  /**
   * uws App or SSLApp instance, use if you have custom needs
   */
  app: Server;
  /**
   * @ignore
   */
  middlewares: CallbackFunction[] = [];
  /**
   * @ignore
   */
  plugins: any = [];
  /**
   * @ignore
   */
  logger: Logger;
  /**
   * The built in pino logger
   */
  token: unknown;
  /**
   * @ignore
   */
  port: number;
  /**
   * uws module
   */
  uws = uws;

  constructor(options: Options = {}) {
    const { logger, ssl, ...opt } = options;

    if (!!ssl) {
      this.app = uws.SSLApp(opt) as Server;
    } else {
      this.app = uws.App(opt) as Server;
    }
    if (logger instanceof pino) {
      this.logger = logger;
    } else {
      this.logger = pino({
        prettyPrint: process.env.NODE_ENV !== 'production',
      });
    }
  }

  /**
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

  register<T>(plugin: PLuginFunction<T>, opt?: T) {
    const result = plugin(this, opt);
    if (result && result instanceof Promise) {
      this.plugins.push(result);
    }
    return this;
  }

  async ready() {
    for (const plugin of this.plugins) {
      if (
        (plugin && plugin instanceof Promise) ||
        (plugin && plugin[Symbol.toStringTag] === 'AsyncFunction')
      ) {
        await plugin;
      }
    }
  }

  numSubscribers(topic: uws.RecognizedString) {
    return this.app.numSubscribers(topic);
  }

  get(path: string, callback: CallbackFunction<REQ, RES>) {
    this.app.get(path, handler(path, callback, this));

    return this;
  }

  options(path: string, callback: CallbackFunction<REQ, RES>) {
    this.app.options(path, handler(path, callback, this));

    return this;
  }

  post(path: string, callback: CallbackFunction<REQ, RES>) {
    this.app.post(path, handler(path, callback, this));

    return this;
  }

  any(path: string, callback: CallbackFunction<REQ, RES>) {
    this.app.any(path, handler(path, callback, this));

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

export type PLuginFunction<OPTIONS = any, REQ = unknown, RES = unknown> = (
  sact: Sact<REQ, RES>,
  opt?: OPTIONS
) => Promise<any> | void;
