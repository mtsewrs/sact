import { Sact } from '@sact/core';
import { session, SessionReq, MemoryStore, SessionRes } from '@sact/session';
import request from 'supertest';
import { auth, AuthReq } from './auth';

const app = new Sact<SessionReq<MemoryStore> & AuthReq, SessionRes>();

const id = 'some-id';

app.register(session, {
  store: new MemoryStore(),
});

app.register(auth, {
  secret: 'some-seceret',
});

app.get('/error', async (req) => {
  const user = await req.authenticateOrFail();
  return { user };
});

app.get('/', async (req) => {
  await req.authenticate();
  return { user: req.user };
});

app.get('/login', async (req) => {
  await req.login(id);
  return 'ok';
});

describe('auth', () => {
  beforeEach(() => app.listen());

  afterEach(() => {
    app.close();
  });

  let cookie: string;

  test('authenticateOrFail', async () => {
    const resp = await request(app).get('/error');
    expect(resp.body.status).toEqual(401);
  });

  test('login', async () => {
    const resp = await request(app).get('/login');
    cookie = resp.header['set-cookie'];
    expect(resp.status).toEqual(200);
  });

  test('authenticate', async () => {
    const resp = await request(app).get('/').set({ cookie });
    expect(resp.body.user).toEqual(id);
  });
});
