import request from 'supertest';
import { Sact, body, BodyReq, HttpError } from '../src/index';
import { Readable } from 'stream';

const app = new Sact<BodyReq>();

app.register(body);

app.get('/', async () => {
  return { foo: 'bar' };
});

app.post('/', async (req) => {
  const body = await req.json();
  return body.foo;
});

app.post('/files', async (req) => {
  const fields = await req.fields();
  if (!fields) {
    throw new HttpError('No fields', 400);
  }
  const [field, image] = fields;
  return { name: field.name, filename: image.filename };
});

app.post('/stream', async (req) => {
  const stream = await req.stream();
  if (!(stream instanceof Readable)) {
    throw new HttpError('Not a stream', 500);
  }
  return { ok: true };
});

app.get('/error', async () => {
  throw new HttpError('error', 400);
});

app.get('/raw', (_, res) => {
  res.end('hello');
});

describe('Basic core server functionality ', () => {
  beforeEach(() => app.listen());

  afterEach(() => {
    app.close();
  });

  test('send json', async () => {
    const resp = await request(app).get('/');
    expect(resp.body.foo).toEqual('bar');
  });

  test('json post', async () => {
    const resp = await request(app).post('/').send({ foo: 'bar' });
    expect(resp.text).toEqual('bar');
    expect(resp.status).toEqual(200);
  });

  test('multipart requests', async () => {
    const resp = await request(app)
      .post('/files')
      .field('logo_field', 'my awesome logo')
      .attach('logo', __dirname + '/public/logo.png');
    expect(resp.body.name).toEqual('logo_field');
    expect(resp.body.filename).toEqual('logo.png');
    expect(resp.status).toEqual(200);
  });

  test('read stream body', async () => {
    const resp = await request(app)
      .post('/stream')
      .attach('logo', __dirname + '/public/logo.png');
    expect(resp.status).toEqual(200);
  });

  test('custom error response', async () => {
    const resp = await request(app).get('/error');
    expect(resp.body.message).toEqual('error');
    expect(resp.body.status).toEqual(400);
    expect(resp.status).toEqual(400);
  });

  test('send raw response', async () => {
    const resp = await request(app).get('/raw');
    expect(resp.text).toEqual('hello');
    expect(resp.status).toEqual(200);
  });
});
