import { Response, Request } from '@sact/core';
import { Options } from '../src';

export interface GenericStore {
  createSessionId: () => string;
  getSessionKey: (key: string) => string;
  getReferenceKey: (key: string) => string;
  delete: (key: string, value: string) => void;
  get: (key: string) => any;
  set: (key: string, id: string, meta?: any) => any;
}

export class Session<STORE extends GenericStore> {
  _store: STORE;
  _options: Options;
  _id: string;
  _req: Request;
  _reply: Response;

  constructor(req: Request, reply: Response, store: STORE, options: Options) {
    this._req = req;
    this._reply = reply;
    this._store = store;
    this._options = options;
  }

  getSessionId() {
    const options = this._options;
    if (this._id) {
      return this._id;
    } else if (this._req.cookies[options.key]) {
      this._id = this._req.cookies[options.key];
    } else {
      this._id = this._store.createSessionId();
    }
    return this._id;
  }

  setCostumCookie(name: string, value: string, unset?: boolean) {
    const options = this._options;
    this._reply.setCookie(name, unset ? '' : value, options);
  }

  setCookie(unset?: boolean) {
    const options = this._options;
    const session_id = this.getSessionId();
    this._reply.setCookie(options.key, unset ? '' : session_id, options);
  }

  getKey() {
    return this._store.getSessionKey(this.getSessionId());
  }

  async get(): Promise<{ id: string; [key: string]: any }> {
    this.setCookie();
    const session_id = this.getSessionId();
    const session = await this._store.get(session_id);
    return session && session.id ? session : null;
  }

  async set(id: string, meta?: any) {
    this.setCookie();
    const session_id = this.getSessionId();
    return this._store.set(session_id, id, meta);
  }

  async delete() {
    this._reply.clearCookie(this._options.key);
    const session_id = this.getSessionId();
    return this._store.delete(session_id, this._id);
  }
}
