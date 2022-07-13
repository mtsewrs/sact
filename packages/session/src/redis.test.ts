import { Sact } from '@sact/core';
import request from 'supertest';
import { session, SessionReq, SessionRes, RedisStore } from '.';

const app = new Sact() as Sact<SessionReq<RedisStore>, SessionRes> & {
  store: RedisStore;
};

app.register(session, {
  store: new RedisStore()
});

const userId = 'some-id';

app.get('/get', async req => {
  const session = await req.session.get();
  return session ? session : 'no session';
});

app.get('/set', async req => {
  await req.session.set(userId, { role: 'admin' });
  return 'ok';
});

app.get('/delete', async req => {
  const session = await req.session.get();
  const ok = await app.store.deleteActiveSessions(session.id);
  if (ok) {
    return 'ok';
  } else {
    return 'failed';
  }
});

describe('redis session', () => {
  let done = false;
  beforeEach(async () => {
    await app.store.connect();
    await app.listen();
  });

  afterEach(() => {
    app.close();
    if (done) {
      app.store.close();
    }
  });

  let cookie: string;

  test('no session', async () => {
    const resp = await request(app).get('/get');
    expect(resp.text).toEqual('no session');
  });

  test('set', async () => {
    const resp = await request(app).get('/set');
    cookie = resp.header['set-cookie'];
    expect(resp.text).toEqual('ok');
  });

  test('get', async () => {
    const resp = await request(app)
      .get('/get')
      .set({ cookie });
    expect(resp.body.id).toEqual(userId);
    expect(resp.body.role).toEqual('admin');
  });

  test('delete', async () => {
    const resp = await request(app)
      .get('/delete')
      .set({ cookie });
    expect(resp.text).toEqual('ok');
  });

  test('empty', async () => {
    const resp = await app.store.client.get('*');
    expect(resp).toBeNull();
    done = true;
  });
});
