import request from 'supertest'
import { Sact, body, BodyReq } from '@sact/core'
import { shine } from '.'

const context = { hello: 'world' }

const app = new Sact<BodyReq>()

app.register(body)

app.register(shine, {
  context,
  path: 'src/routes',
  ts: true,
  prefix: '/api',
})

describe('shine', () => {
  beforeEach(() => app.listen())

  afterEach(() => {
    app.close()
  })

  test('handle error', async () => {
    const resp = await request(app).post('/api/user/hello').send({})
    expect(resp.status).toEqual(400)
  })

  test('basic route', async () => {
    const text = 'some text'
    const resp = await request(app).post('/api/user/hello').send({ text })
    expect(resp.body.hello).toEqual(context.hello)
    expect(resp.body.text).toEqual(text)
  })
})
