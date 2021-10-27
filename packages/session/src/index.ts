import { Sact, PLuginFunction } from '@sact/core';
import cookie, { CookieSerializeOptions } from 'cookie';
import { Session, GenericStore } from './session';
import { RedisStore } from './redis-store';
import { MemoryStore } from './memory-store';

interface Options {
  key?: string;
  store: RedisStore | MemoryStore;
  cookie?: CookieSerializeOptions;
}

export interface SessionReq<T extends GenericStore> {
  session: Session<T>;
  cookies: {
    [key: string]: any;
  };
}

export interface SessionRes {
  setCookie: (name: string, value: string) => void;
  clearCookie: (name: string) => void;
}

const session: PLuginFunction<Options> = (
  sact: Sact<SessionReq<any>, SessionRes> & { store: any },
  options: Options
) => {
  if (!options || !options.store) {
    throw new Error('[@sact/session] requires store option');
  }
  const store = options.store;
  options.key = options.key || 'sid';
  sact.store = store;

  options.cookie = options.cookie
    ? {
        httpOnly: true,
        secure: false,
        maxAge: 28 * 24 * 60 * 60, // defaults to 28 days
        ...options.cookie,
      }
    : {
        httpOnly: true,
        secure: false,
        maxAge: 28 * 24 * 60 * 60, // defaults to 28 days
      };

  sact.use((req, res) => {
    const cookieHeader = req.getHeader('cookie');
    if (cookieHeader) {
      req.cookies = cookie.parse(cookieHeader);
    } else {
      req.cookies = {};
    }

    res.setCookie = (name, value) => {
      const setCookie = cookie.serialize(name, value, options.cookie);
      res.writeHeader('Set-Cookie', setCookie);
      return res;
    };

    res.clearCookie = (name) => {
      cookie.serialize(name, '', options.cookie);
      return res;
    };

    const session = new Session(req, res, store, options);
    req.session = Object.assign(session, {
      store,
      options,
    });
  });
};

export { Session, RedisStore, session, Options, MemoryStore };
