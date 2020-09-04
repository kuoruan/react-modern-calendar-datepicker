import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';

const config = {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/index.cjs.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'lib/index.es.js',
      format: 'es',
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    resolve(),
    babel({
      exclude: /node_modules/,
      babelHelpers: 'bundled',
    }),
    commonjs(),
    copy({
      targets: [{ src: 'src/DatePicker.css', dest: 'lib' }],
    }),
    terser(),
  ],
};

export default config;
