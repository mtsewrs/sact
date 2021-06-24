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
      const method = req.body.method
      const path = paths[i]
      const func: (ctx: any) => Promise<any> = methods[path][method]
      if (!func) {
        throw new HttpError('Method not found', 400)
      }

      return func({
        ...context,
        req,
        res,
        isWs: false,
        params: req.body.params || {}
      })
    })
  }
}
