import { Sact, BodyReq, HttpError } from '@sact/core'

export function build_routes(
  app: Sact<BodyReq>,
  paths: string[],
  methods: any,
  prefix: string
) {
  for (let i = 0; i < paths.length; i++) {
    const path = paths[i]
    const m = Object.keys(methods[path])
    for (let j = 0; j < m.length; j++) {
      const method_route = m[j]
      const route = methods[path][method_route]
      if (!route) continue

      const method = method_route.replace('_post', '').replace('_get', '')
      const isGet = method_route.includes('get')

      const schema = route.schema
      const handler = route.handler

      if (isGet) {
        app.get(prefix + '/' + path + '/' + method, (req, res) => {
          return handler({
            request: req,
            response: res
          })
        })
      } else {
        app.post(prefix + '/' + path + '/' + method, (req, res) => {
          if (!schema) {
            throw new HttpError('No schema supplied to route', 500)
          }
          const contentType = req.getHeader('content-type')
          if (contentType === 'application/json') {
            return req.json().then(data => {
              const result = schema.safeParse(data)
              if (!result.success) {
                throw new HttpError(result.error.name, 400, result.error.errors)
              } else {
                return handler({
                  request: req,
                  response: res,
                  params: result.data
                })
              }
            })
          } else if (contentType === 'application/x-www-form-urlencoded') {
            return req.form().then(data => {
              const result = schema.safeParse(data)
              if (!result.success) {
                throw new HttpError(result.error.name, 400, result.error.errors)
              } else {
                return handler({
                  request: req,
                  response: res,
                  params: result.data
                })
              }
            })
          } else if (contentType.includes('multipart/form-data')) {
            return req.fields().then(fields => {
              const data = fields?.reduce(
                (prev, field) => ({
                  ...prev,
                  [field.name]: Buffer.from(field.data)
                }),
                {}
              )
              const result = schema.safeParse(data)
              if (!result.success) {
                throw new HttpError(result.error.name, 400, result.error.errors)
              } else {
                return handler({
                  request: req,
                  response: res,
                  params: result.data
                })
              }
            })
          } else {
            throw new HttpError('Invalid post request', 400)
          }
        })
      }
    }
  }
}
