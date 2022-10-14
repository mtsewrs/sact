import configure from '../../config/rollup.config';
import { dependencies } from './package.json';

export default configure({
  input: './src/trpc.ts',
  dependencies,
  external: Object.keys(dependencies),
});
