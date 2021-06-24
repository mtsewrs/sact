import { GenericStore } from './generic-store';

interface Options {
  maxAge?: number;
  prefix?: string;
  namespace?: string;
  byteLength?: number;
}

export class MemoryStore extends GenericStore {
  store = new Map<string, any>();

  constructor(options?: Options) {
    super(options);
  }

  get(session_id: string) {
    const key = this.getSessionKey(session_id);
    return this.store.get(key);
  }

  set(session_id: string, value: string, meta = {}): void {
    const key = this.getSessionKey(session_id);

    this.store.set(key, { ...meta, id: value });
  }

  delete(session_id: string): void {
    const key = this.getSessionKey(session_id);
    this.store.delete(key);
  }
}
