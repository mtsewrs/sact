import request from 'supertest';
import { Sact, cors } from '../src/index';

const app = new Sact();

app.register(cors, {
  preflight: true,
  origin: /^(example|other)\.com/,
  methods: 'GET',
  credentials: true,
  exposedHeaders: ['foo', 'bar'],
  allowedHeaders: ['baz', 'woo'],
  maxAge: 123,
});

describe('Cors ', () => {
  beforeEach(() => app.listen(9001));

  afterEach(() => {
    app.close();
  });

  it('cors headers', async () => {
    const resp = await request(app).options('/').set({ origin: 'example.com' });
    expect(resp.headers).toEqual(
      expect.objectContaining({
        'access-control-allow-origin': 'example.com',
        vary: 'Origin',
        'access-control-allow-credentials': 'true',
        'access-control-expose-headers': 'foo, bar',
        'access-control-allow-methods': 'GET',
        'access-control-allow-headers': 'baz, woo',
        'access-control-max-age': '123',
        uwebsockets: '19',
        'content-length': '0',
      })
    );
  });
});
