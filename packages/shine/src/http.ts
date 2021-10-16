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
      return req.json().then((body) => {
        const method = body ? body.method : null
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
          isWs: false,
          params,
        })
      })
    })
  }
}
