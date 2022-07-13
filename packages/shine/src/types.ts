import { BodyReq, Request, Response } from '@sact/core'
import { z, ZodType } from 'zod'

export interface PostRoute<T extends ZodType<unknown, any, unknown>> {
  handler: (ctx: {
    response: Response
    request: Request<BodyReq>
    params: z.infer<T>
  }) => Promise<any> | any
  schema: T
}

export interface GetRoute<RES = any> {
  handler: (ctx: {
    response: Response
    request: Request<BodyReq>
  }) => Promise<RES> | RES
}
