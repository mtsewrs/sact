import configure from '../../config/rollup.config'
import { dependencies } from './package.json'

export default configure({
  input: './lib/index.ts',
  dependencies,
  external: Object.keys(dependencies),
})
