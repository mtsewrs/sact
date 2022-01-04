import { HttpError, Sact, BodyReq } from '@sact/core'

export function http(
  app: Sact<BodyReq>,
  paths: string[],
  methods: any,
  context: any,
  prefix: string
) {
  for (let i = 0; i < paths.length; i++) {
    app.post(prefix + '/' + paths[i], (req, res) => {
      return req.json<{ method: string; params: any }>().then((body) => {
        if (!body?.method) throw new HttpError('No method specified', 400)
        const method = body.method
        const params = body.params || {}
        const path = paths[i]
        const func: (ctx: any) => Promise<any> = methods[path]
          ? methods[path][method]
          : null
        if (!func) {
          throw new HttpError('Method not found', 404)
        }

        return func({
          ...context,
          req,
          res,
          params,
        })
      })
    })
  }
}
