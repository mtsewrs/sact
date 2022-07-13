import { PLuginFunction, HttpError, Sact } from '@sact/core';
import { SessionReq, SessionRes, MemoryStore, RedisStore } from '@sact/session';
import * as jwt from 'jsonwebtoken';

export interface Options {
  /**
   * secret for jwt token
   */
  secret?: string;
  cookieName?: string;
}

export interface AuthReq {
  user: string | undefined;
  /**
   * Log user out
   */
  logout: () => Promise<void>;
  /**
   * Login in the user by id
   *
   * ```typescript
   * // login the user by id and some optional meta data
   * await req.login('some-user-id', {})
   * ```
   */
  login: <T>(id: string, meta?: T) => Promise<void>;
  /**
   * Authenticate the user
   *
   * ```typescript
   * await req.authenticate() //  👈 All you need to do, the user will then be available on req.user
   * ```
   */
  authenticate: () => Promise<string | undefined>;
  /**
   * Authenticate the user or throw a 401 status if failed
   *
   * ```typescript
   * await req.authenticateOrFail() //  👈 All you need to do, the user will then be available on req.user
   * ```
   */
  authenticateOrFail: () => Promise<string>;
}

const verify = (
  token: string,
  secret: string
): Promise<{ id: string | number }> =>
  new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded: any) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(decoded);
      }
    });
  });

const sign = (data: { id: string | number }, secret: string): Promise<string> =>
  new Promise((resolve, reject) => {
    jwt.sign(data, secret, { expiresIn: '1h' }, (err, encode) => {
      if (err) {
        reject(err);
      } else {
        resolve(encode as string);
      }
    });
  });

const auth: PLuginFunction<Options> = (
  sact: Sact<AuthReq & SessionReq<MemoryStore | RedisStore>, SessionRes>,
  options
) => {
  if (!options?.secret) {
    throw new Error('[sact-auth] secret is required');
  }
  const secret = options.secret;
  const cookieName = options.cookieName || 'token';

  sact.use((req, res) => {
    req.login = async (id: string, meta?: any) => {
      const token = await sign({ id }, secret);
      await req.session.set(id, meta);
      res.setCookie(cookieName, token);
    };

    req.logout = async () => {
      await req.session.delete();
      res.setCookie(cookieName, '');
    };

    req.authenticateOrFail = async () => {
      const token = req.cookies[cookieName];
      if (token) {
        let id: string | undefined;
        try {
          const jwt = await verify(token, secret);
          id = jwt.id as string;
        } catch (error) {
          if (error instanceof jwt.TokenExpiredError) {
            const session = await req.session.get();
            if (session) {
              const token = await sign({ id: session.id }, secret);
              res.setCookie(cookieName, token);
              id = session.id;
            }
          }
        }

        if (!id) {
          throw new HttpError('Unauthorized', 401);
        }

        req.user = id;
        return id;
      } else {
        throw new HttpError('Unauthorized', 401);
      }
    };

    req.authenticate = async () => {
      const token = req.cookies[cookieName];
      if (token) {
        let id: string | undefined;
        try {
          const jwt = await verify(token, secret);
          id = jwt.id as string;
        } catch (error) {
          if (error instanceof jwt.TokenExpiredError) {
            const session = await req.session.get();
            if (session && session.id) {
              const token = await sign({ id: session.id }, secret);
              res.setCookie(cookieName, token);
              id = session.id;
            }
          }
        }

        req.user = id;
        return id;
      } else {
        return;
      }
    };
  });
};

export { auth };
