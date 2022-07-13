import request from 'supertest';
import { Readable } from 'stream';
import { Sact, body, BodyReq, HttpError } from '../src/index';

const app = new Sact<BodyReq>();

app.register(body);

app.get('/', () => {
  return { foo: 'bar' };
});

app.post('/', async req => {
  const body = await req.json<{ foo: string }>();
  return body.foo;
});

app.post('/fields', async req => {
  const fields = await req.fields();
  if (!fields) {
    throw new HttpError('No fields', 400);
  }
  const [field, image] = fields;
  return { name: field.name, filename: image.filename };
});

app.post('/stream', async req => {
  const stream = await req.stream();
  if (!(stream instanceof Readable)) {
    throw new HttpError('Not a stream', 500);
  }
  return stream;
});

app.get('/error', async () => {
  throw new HttpError('error', 400);
});

app.get('/sync-error', () => {
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
    const resp = await request(app)
      .post('/')
      .send({ foo: 'bar' });
    expect(resp.text).toEqual('bar');
    expect(resp.status).toEqual(200);
  });

  test('multipart requests', async () => {
    const resp = await request(app)
      .post('/fields')
      .field('logo_field', 'my awesome logo')
      .attach('logo', __dirname + '/public/logo.png');
    expect(resp.body.name).toEqual('logo_field');
    expect(resp.body.filename).toEqual('logo.png');
    expect(resp.status).toEqual(200);
  });

  test('read stream body and return stream', async () => {
    const data = { foo: 'bar' };
    const resp = await request(app)
      .post('/stream')
      .send(data);
    expect(resp.status).toEqual(200);
    expect(data).toEqual(JSON.parse(resp.body.toString()));
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

  test('sync error', async () => {
    const resp = await request(app).get('/sync-error');
    expect(resp.status).toEqual(400);
  });
});
