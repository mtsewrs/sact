import { randomBytes } from 'crypto';

interface Options {
  maxAge?: number;
  prefix?: string;
  namespace?: string;
  byteLength?: number;
}

export class GenericStore {
  prefix?: string;
  byteLength?: number;

  constructor(options: Options = {}) {
    // name space for all keys
    this.prefix = 'session';
    if (options.prefix) this.prefix = options.prefix;
    else if (options.namespace)
      this.prefix = `sact-session:${options.namespace}`;

    this.byteLength = options.byteLength || 18;
  }

  createSessionId() {
    return randomBytes(this.byteLength).toString('base64');
  }

  getSessionKey(session_id: string) {
    return `${this.prefix}:${session_id}`;
  }

  getReferenceKey(value: string) {
    return `${this.prefix}:user_id:${value}`;
  }
}
