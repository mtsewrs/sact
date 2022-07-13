import request from 'supertest'
import { Sact, body, BodyReq } from '@sact/core'
import { shine } from '.'

const app = new Sact<BodyReq>()

app.register(body)

app.register(shine, {
  path: 'src/routes',
  ts: true,
  prefix: '/api'
})

describe('shine', () => {
  beforeEach(() => app.listen())

  afterEach(() => {
    app.close()
  })

  test('handle error', async () => {
    const resp = await request(app)
      .post('/api/user/hello')
      .send({})
    expect(resp.status).toEqual(400)
  })

  test('post json route', async () => {
    const text = 'some text'
    const resp = await request(app)
      .post('/api/user/hello')
      .send({ text })
    expect(resp.body.text).toEqual(text)
  })

  test('post form', async () => {
    const text = 'some text'
    const resp = await request(app)
      .post('/api/user/hello')
      .type('form')
      .send({ text: text })
    expect(resp.body.text).toEqual(text)
  })

  test('post multipart', async () => {
    const text = 'some text'
    const resp = await request(app)
      .post('/api/user/world')
      .field('text', text)
    expect(resp.body.text).toEqual(text)
  })

  test('basic get route', async () => {
    const resp = await request(app).get('/api/user/hello')
    expect(resp.body.text).toEqual('hello')
  })
})
