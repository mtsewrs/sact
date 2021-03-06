import { Sact } from '@sact/core';
import request from 'supertest';
import { session, SessionReq, MemoryStore, SessionRes } from '.';

const app = new Sact() as Sact<SessionReq<MemoryStore>, SessionRes> & {
  store: MemoryStore;
};

app.register(session, {
  store: new MemoryStore(),
});

const name = 'some-id';

app.get('/get', async (req) => {
  const session = await req.session.get();
  return session ? session : 'no session';
});

app.get('/set', async (req) => {
  await req.session.set(name, { role: 'admin' });
  return 'ok';
});

app.get('/delete', async (req) => {
  await req.session.delete();
  const session = await req.session.get();
  return session ? 'fail' : 'ok';
});

describe('memory session', () => {
  beforeEach(async () => {
    await app.listen();
  });

  afterEach(() => {
    app.close();
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
    const resp = await request(app).get('/get').set({ cookie });
    expect(resp.body.id).toEqual(name);
    expect(resp.body.role).toEqual('admin');
  });

  test('delete', async () => {
    const resp = await request(app).get('/delete').set({ cookie });
    expect(resp.text).toEqual('ok');
  });
});
