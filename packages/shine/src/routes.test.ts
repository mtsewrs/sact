import request from 'supertest'
import { Sact, body } from '@sact/core'
import { shine } from '.'

const context = { hello: 'world' }

const app = new Sact()

app.register(body)

app.register(shine, {
  context,
  path: 'src/routes',
  ts: true,
})

describe('shine', () => {
  beforeEach(async () => {
    await app.listen(9001)
  })

  afterEach(() => {
    app.close()
  })

  test('basic route', async () => {
    const text = 'some text'
    const resp = await request(app)
      .post('/user')
      .send({ method: 'hello', params: { text } })
    expect(resp.body.hello).toEqual(context.hello)
    expect(resp.body.text).toEqual(text)
  })

  test('not found', async () => {
    const resp = await request(app).post('/user').send({ method: 'notFound' })
    expect(resp.body.message).toEqual('Method not found')
    expect(resp.body.status).toEqual(400)
  })
})
