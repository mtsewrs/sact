import configure from '../../config/rollup.config'
import { dependencies } from './package.json'

export default configure({
  input: './src/index.ts',
  dependencies,
  external: [...Object.keys(dependencies), '@sact/core'],
})
