import { Request, Response } from '@sact/core'
import { z, ZodType } from 'zod'

export interface PostRoute<T extends ZodType<unknown, any, unknown>> {
  handler: (ctx: {
    response: Response
    request: Request
    params: z.infer<T>
  }) => Promise<any> | any
  schema: T
}

type HandlerFunction<T> = (ctx: {
  response: Response
  request: Request
}) => T

export interface GetRoute {
  handler: HandlerFunction
}
