import typescript from '@rollup/plugin-typescript';

export default (opts) => {
  return {
    input: opts.input,
    output: { format: 'cjs', dir: './dist', sourcemap: true },

    external: opts.external,

    plugins: [typescript()],
  };
};
