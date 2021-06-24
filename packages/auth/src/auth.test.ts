import { Sact } from '@sact/core';
import { session, SessionReq, MemoryStore } from '@sact/session';
import request from 'supertest';
import { auth, AuthReq } from './auth';

const app = new Sact<AuthReq & SessionReq<MemoryStore>>();

const id = 'some-id';

app.register(session, {
  store: new MemoryStore(),
});

app.register(auth, {
  secret: 'some-seceret',
});

app.get('/error', async (req) => {
  await req.authenticateOrFail();
  return { user: req.user };
});

app.get('/', async (req) => {
  await req.authenticate();
  return { user: req.user };
});

app.get('/login', async (req) => {
  await req.login(id);
  return { success: true };
});

describe('auth', () => {
  beforeEach(() => app.listen(9002));

  afterEach(() => {
    app.close();
  });

  let cookie: string;

  test('authenticateOrFail', async () => {
    const resp = await request(app).get('/error');
    expect(resp.body.status).toEqual(401);
  });

  test('login', async () => {
    const login = await request(app).get('/login');
    cookie = login.header['set-cookie'];
    expect(login.body.success).toEqual(true);
  });

  test('authenticate', async () => {
    const resp = await request(app).get('/').set({ cookie });
    expect(resp.body.user).toEqual(id);
  });
});
