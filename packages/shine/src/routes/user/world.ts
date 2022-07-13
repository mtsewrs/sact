import { z } from 'zod'
import { PostRoute } from '../../types'

const schema = z.object({
  text: z.instanceof(Buffer)
})

export const post: PostRoute<typeof schema> = {
  schema,
  handler: ({ params }) => {
    return { text: params.text.toString() }
  }
}
