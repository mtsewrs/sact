import { Sact, BodyReq } from '@sact/core'

export function ws(
  app: Sact<BodyReq>,
  methods: any,
  context: any,
  ts: boolean
) {
  const upgrade = methods['upgrade' + (ts ? '.ts' : '.js')]
    ? methods['upgrade' + (ts ? '.ts' : '.js')]['upgrade']
    : undefined
  const open = methods['open' + (ts ? '.ts' : '.js')]
    ? methods['open' + (ts ? '.ts' : '.js')]['open']
    : undefined
  const close = methods['close' + (ts ? '.ts' : '.js')]
    ? methods['close' + (ts ? '.ts' : '.js')]['close']
    : undefined
  const drain = methods['drain' + (ts ? '.ts' : '.js')]
    ? methods['drain' + (ts ? '.ts' : '.js')]['drain']
    : undefined
  app.ws('/shine', {
    compression: app.uws.SHARED_COMPRESSOR,
    maxPayloadLength: 16 * 1024 * 1024,
    idleTimeout: 0,
    open,
    upgrade,
    close,
    drain,
    message: async (ws, message) => {
      let data: any = {}
      try {
        data = JSON.parse(Buffer.from(message).toString())
      } catch (error) {
        data = { error: true, message: error.message, type: 'parse' }
      }

      const { method, path, error, params, type } = data

      if (error) {
        ws.cork(() => {
          ws.send(JSON.stringify(data))
        })
        return
      }

      if (!type) {
        ws.cork(() => {
          ws.send(
            JSON.stringify({
              error: true,
              message: 'Unknown type',
              type: 'unknown',
            })
          )
        })
        return
      } else if (type === 'request') {
        const func: (ctx: any) => Promise<any> = methods[path]
          ? methods[path][method]
          : null
        if (!func) {
          ws.cork(() => {
            ws.send(
              JSON.stringify({
                error: true,
                method,
                path,
                message: 'method not found',
                type: 'server',
              })
            )
          })
          return
        }

        try {
          const result = await func({
            ...context,
            isWs: true,
            ws,
            params: params || {},
          })
          ws.cork(() => {
            ws.send(JSON.stringify({ result, method, path, type: 'request' }))
          })
        } catch (error) {
          ws.cork(() => {
            ws.send(
              JSON.stringify({
                error: true,
                message: error.message,
                method,
                path,
                type: 'server',
              })
            )
          })
        }
      }
    },
  })
}
