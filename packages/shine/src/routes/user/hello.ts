import { z } from 'zod'
import { PostRoute, GetRoute } from '../../types'

const schema = z.object({
  text: z.string()
})

export const post: PostRoute<typeof schema> = {
  schema,
  handler: ({ params }) => {
    return { text: params.text }
  }
}

export const get: GetRoute = {
  handler: () => {
    return { text: 'hello' }
  }
}
