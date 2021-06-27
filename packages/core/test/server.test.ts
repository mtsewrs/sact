import request from 'supertest';
import { promises as fs } from 'fs';
import { Sact, body, BodyReq, FileRes, serve, HttpError } from '../src/index';

const app = new Sact<BodyReq, FileRes>();

app.register(body, {
  limit: 10000,
});

app.register(serve, {
  folder: 'test/public',
  prefix: 'static',
});

app.get('/', async () => {
  return { foo: 'bar' };
});

app.post('/', async (req) => {
  return req.body.foo;
});

app.post('/files', async (req) => {
  const [field, image] = req.fields;
  return { name: field.name, filename: image.filename };
});

app.get('/error', async () => {
  throw new HttpError('error', 400);
});

describe('Basic core server functionality ', () => {
  beforeEach(() => app.listen());

  afterEach(() => {
    app.close();
  });

  it('can respond with json', async () => {
    const resp = await request(app).get('/');
    expect(resp.body.foo).toEqual('bar');
  });

  it('accepts json', async () => {
    const resp = await request(app).post('/').send({ foo: 'bar' });
    expect(resp.text).toEqual('bar');
    expect(resp.status).toEqual(200);
  });

  it('accepts files', async () => {
    const resp = await request(app)
      .post('/files')
      .field('logo_field', 'my awesome logo')
      .attach('logo', __dirname + '/public/logo.png');
    expect(resp.body.name).toEqual('logo_field');
    expect(resp.body.filename).toEqual('logo.png');
    expect(resp.status).toEqual(200);
  });

  it('custom error response', async () => {
    const resp = await request(app).get('/error');
    expect(resp.body.message).toEqual('error');
    expect(resp.body.status).toEqual(400);
    expect(resp.status).toEqual(400);
  });

  it('can serve static files', async () => {
    const text = 'hello there!'.repeat(10);
    const filename = 'test.txt';
    await fs.writeFile(__dirname + '/public/' + filename, text);
    const resp = await request(app).get('/static/' + filename);
    expect(resp.text).toEqual(text);
    expect(resp.status).toEqual(200);
  });

  it('should return code 413 when payload is to large', async () => {
    const text = 'hello there!'.repeat(10000);
    const filename = 'error.txt';
    await fs.writeFile(__dirname + '/public/' + filename, text);
    const resp = await request(app)
      .post('/files')
      .attach('logo', __dirname + '/public/' + filename);
    expect(resp.status).toEqual(413);
  });
});
