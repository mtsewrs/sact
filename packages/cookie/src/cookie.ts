import { PLuginFunction, Sact } from '@sact/core';
import Cookie, { CookieSerializeOptions } from 'cookie';

export interface CookieRes {
  setCookie: (name: string, value: string) => void;
  clearCookie: (name: string) => void;
}

export interface CookieReq {
  cookies: {
    [key: string]: any;
  };
}

export interface Options extends CookieSerializeOptions {}

const cookie: PLuginFunction<Options> = (
  sact: Sact<CookieReq, CookieRes>,
  options = {}
) => {
  options.maxAge = options.maxAge || 28 * 24 * 60 * 60; // defaults to 28 days
  sact.use((req, res) => {
    const cookieHeader = req.getHeader('cookie');
    if (cookieHeader) {
      req.cookies = Cookie.parse(cookieHeader);
    } else {
      req.cookies = {};
    }

    res.setCookie = (name, value) => {
      const setCookie = Cookie.serialize(name, value, options);
      res.writeHeader('Set-Cookie', setCookie);
      return res;
    };

    res.clearCookie = (name) => {
      const setCookie = Cookie.serialize(name, '', options);
      res.writeHeader('Set-Cookie', setCookie);
      return res;
    };
  });
};

export { cookie };
