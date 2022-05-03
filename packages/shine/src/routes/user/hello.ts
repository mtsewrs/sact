import { z, ZodType } from 'zod'
import { Ctx } from '../..'

interface Route<T extends ZodType<any, any, any>> {
  handler: (
    ctx: Ctx<{ params: z.infer<T>; context: { hello: string } }>
  ) => Promise<any>
  schema?: T
}

const schema = z.object({
  text: z.string(),
})

export const hello: Route<typeof schema> = {
  schema,
  handler: async ({ context, params }) => {
    return { hello: context.hello, text: params.text }
  },
}
