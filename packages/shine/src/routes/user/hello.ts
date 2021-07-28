import { Ctx } from '../..'

interface Context<params> extends Ctx<{ params: params }> {
  hello: string
}

export const hello = async (ctx: Context<{ text: string }>) => {
  return { hello: ctx.hello, text: ctx.params.text }
}
