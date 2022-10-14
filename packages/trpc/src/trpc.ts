import { PLuginFunction, Sact, BodyReq } from '@sact/core';
import { AnyRouter, resolveHTTPResponse } from '@trpc/server';

interface Options {
  prefix?: string;
  router: AnyRouter;
  batching?: boolean;
  responseMeta?: any;
  onError?: (o: any) => {};
}

const trpc: PLuginFunction<Options> = (sact: Sact<BodyReq>, options) => {
  const prefix = options?.prefix ?? '';

  if (!options?.router) {
    throw new Error('[@sact/trpc] Router must be provided');
  }

  sact.any(`${prefix}/:path`, (req, res) => {
    const path = req.getParameter(0);
    const query = new URLSearchParams(req.getQuery());
    const method = req.getMethod().toUpperCase();
    const createContext = async () => {};
    if (method !== 'POST') {
      const _req: any = {
        query,
        method,
        headers: {
          'Content-Type': req.getHeader('content-type')
        },
        body: 'null'
      };
      return resolveHTTPResponse({
        createContext,
        router: options.router,
        path,
        req: _req,
        batching: { enabled: options.batching || true },
        responseMeta: options.responseMeta,
        onError(o) {
          options?.onError?.(o);
        }
      }).then(response => {
        if (response.status) {
          res.statusCode = response.status;
        }
        return response.body;
      });
    }
    return req.buffer().then(body => {
      const _req: any = {
        query,
        method,
        headers: {
          'Content-Type': req.getHeader('content-type')
        },
        body: body.toString() ?? 'null'
      };
      return resolveHTTPResponse({
        createContext,
        router: options.router,
        path,
        req: _req,
        batching: { enabled: options.batching || false },
        responseMeta: options.responseMeta,
        onError(o) {
          options?.onError?.(o);
        }
      }).then(response => {
        if (response.status) {
          res.statusCode = response.status;
        }
        return response.body;
      });
    });
  });
};

export { trpc };
