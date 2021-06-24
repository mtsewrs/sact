import { Ctx } from '../..'

interface Context {
  hello: string
}

export const hello = async (ctx: Ctx<{ context: Context }>) => {
  return { hello: ctx.hello, text: ctx.params.text }
}
