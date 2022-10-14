import { Sact } from '@sact/core';
import { initTRPC, TRPCError } from '@trpc/server';
import {
  createTRPCProxyClient,
  httpBatchLink,
  TRPCClientError
} from '@trpc/client';
import { fetch } from 'undici';
import { z } from 'zod';

(global as any).fetch = fetch;

import { trpc } from './trpc';

const t = initTRPC.create();
const appRouter = t.router({
  input: t.procedure
    .input(
      z.object({
        test: z.string()
      })
    )
    .query(({ input }) => {
      return input.test;
    }),
  test: t.procedure.query(() => {
    return 'test';
  }),
  bad: t.procedure.query(() => {
    throw new TRPCError({
      code: 'NOT_FOUND',
      message: 'test'
    });
  })
});
type AppRouter = typeof appRouter;

const app = new Sact();

app.register(trpc, { router: appRouter, prefix: '/trpc' });

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:9001/trpc'
    })
  ]
});

function isTRPCClientError(
  cause: unknown
): cause is TRPCClientError<AppRouter> {
  return cause instanceof TRPCClientError;
}

describe('trpc', () => {
  beforeEach(() => app.listen(9001));

  afterEach(() => {
    app.close();
  });

  test('simple query', async () => {
    const resp = await client.test.query();
    expect(resp).toBe('test');
  });

  test('error query', async () => {
    try {
      await client.bad.query();
      expect(true).toBe(false);
    } catch (error) {
      if (isTRPCClientError(error)) {
        expect(error.message).toBe('test');
      } else {
        expect(true).toBe(false);
      }
    }
  });

  test('input query', async () => {
    const resp = await client.input.query({ test: 'test' });
    expect(resp).toBe('test');
  });
});
