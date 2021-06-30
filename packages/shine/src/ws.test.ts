import { Sact, body } from '@sact/core'
import { shine } from '.'
import { Client } from './client'

const context = { hello: 'world' }

const app = new Sact()

app.register(body)

app.register(shine, {
  path: 'src/routes',
  context,
  ts: true,
  wsOnly: true,
})

describe('shine', () => {
  beforeEach(() => app.listen())

  afterEach(() => {
    app.close()
  })

  test('can request data using callback', (done) => {
    const client = new Client('ws://localhost:' + app.port)
    client.req('user', 'hello', {}, (data) => {
      expect(data.result.hello).toBe(context.hello)
      done()
    })
  })

  test('can request data using promise', async () => {
    const client = new Client('ws://localhost:' + app.port)
    const data = await client.request<{ result: { hello: string } }>(
      'user',
      'hello'
    )
    expect(data.result.hello).toBe(context.hello)
  })

  test('can handle promise errors', async () => {
    const client = new Client('ws://localhost:' + app.port)
    try {
      await client.request('user', 'noop')
    } catch (error) {
      expect(error.message).toBe('method not found')
    }
  })
})
