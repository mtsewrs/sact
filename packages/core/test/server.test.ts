import request from 'supertest';
import { Sact, body, BodyReq, HttpError } from '../src/index';

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
  const [field, image] = await req.fields();
  return { name: field.name, filename: image.filename };
});

app.get('/error', async () => {
  throw new HttpError('error', 400);
});

app.get('/send', (_, res) => {
  res.send('hello');
});

app.get('/next', (_, __, next) => {
  next();
});

app.get('/*', async () => {
  return 'ok';
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

  it('res.send', async () => {
    const resp = await request(app).get('/send');
    expect(resp.text).toEqual('hello');
  });

  it('can call next', async () => {
    const resp = await request(app).get('/next');
    expect(resp.text).toEqual('ok');
  });
});
