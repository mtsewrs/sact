import Redis from 'ioredis';
import { GenericStore } from './generic-store';
import { getMS } from './utils';

interface Options {
  maxAge?: number;
  /**
   * ioredis client
   */
  client?: any;
  prefix?: string;
  namespace?: string;
  byteLength?: number;
}

export class RedisStore extends GenericStore {
  client?: any;
  maxAge?: number;

  constructor(options: Options = {}) {
    super(options);
    if (process.env.NODE_ENV === 'CI') {
      this.client = new Redis({
        host: process.env.REDIS_HOST,
      });
    } else {
      this.client = options.client || new Redis();
    }
    this.maxAge = getMS(options.maxAge || '28 days');
  }

  close() {
    return this.client.disconnect();
  }

  connect(): Promise<any> {
    if (!['ready', 'connecting', 'connected'].includes(this.client.status)) {
      return this.client.connect();
    } else {
      return Promise.resolve();
    }
  }

  async deleteActiveSessions(id: string): Promise<boolean> {
    const key = this.getReferenceKey(id);
    const session_ids = await this.client.smembers(key);
    await Promise.all(
      session_ids.map((session_id: string) => {
        // deletes the session and removes the session from all the referenced sets
        if (session_id) {
          return this.delete(session_id, id);
        } else {
          return Promise.resolve();
        }
      })
    );

    return true;
  }

  getActiveSessions() {
    return this.client.zcount(`session:*`);
  }

  async get(session_id: string) {
    const key = this.getSessionKey(session_id);
    return await this.client.hgetall(key);
  }

  async set(session_id: string, id: string, meta: any): Promise<any> {
    const key = this.getSessionKey(session_id);
    const HMSET = ['hmset', key, 'id', session_id];
    const multi = [
      HMSET,
      ['pexpire', key, this.maxAge],
      ['sadd', this.getReferenceKey(id), session_id],
    ];
    HMSET.push('id', id);
    for (const field of Object.keys(meta)) {
      const value = meta[field];
      HMSET.push(field, value);
    }
    return await this.client.multi(multi).exec();
  }

  async delete(session_id: string, value: string) {
    const key = this.getSessionKey(session_id);

    const multi = [
      ['del', key],
      ['srem', this.getReferenceKey(value), session_id],
    ];

    return this.client.multi(multi).exec();
  }
}
