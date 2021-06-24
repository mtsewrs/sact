import { Sact } from '@sact/core';
import request from 'supertest';
import { cookie, CookieReq, CookieRes } from './cookie';

const app = new Sact<CookieReq, CookieRes>();

app.register(cookie, {
  secure: true,
  domain: 'example.com',
});

app.get('/', async (_, res) => {
  res.setCookie('hello', 'world');
  return 'ok';
});

describe('cookie', () => {
  beforeEach(() => app.listen(9002));

  afterEach(() => {
    app.close();
  });

  test('setCookie', async () => {
    const resp = await request(app).get('/');
    expect(resp.header['set-cookie']).toEqual([
      'hello=world; Max-Age=2419200; Domain=example.com; Secure',
    ]);
  });
});
