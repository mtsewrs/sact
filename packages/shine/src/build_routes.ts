import { Sact, BodyReq, HttpError } from '@sact/core'
import { z } from 'zod'

interface Route {
  handler: (arg: any) => Promise<any>
  schema: z.ZodObject<any>
}

export function build_routes(
  app: Sact<BodyReq>,
  paths: string[],
  methods: any,
  context: any,
  prefix: string
) {
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i]
    const m = Object.keys(methods[path])
    for (let j = 0; j < m.length; j++) {
      const method = m[j]
      const route: Route = methods[path][method]

      const schema = route.schema
      const handler = route.handler

      app.any(prefix + '/' + path + '/' + method, (req, res) => {
        const m = req.getMethod()
        if (m === 'post') {
          return req.json().then((data) => {
            const result = schema.safeParse(data)
            if (!result.success) {
              throw new HttpError(result.error.name, 400, result.error.errors)
            } else {
              return handler({
                context,
                req,
                res,
                params: result.data,
                method: m,
              })
            }
          })
        } else {
          return handler({
            ...context,
            req,
            res,
            method: m,
          })
        }
      })
    }
  }
}
