const typescript = require('rollup-plugin-typescript');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');

module.exports = {
  input: 'lib/index.ts',
  output: {
    dir: 'package',
    format: 'cjs'
  },
  external: [
    'path',
    'fs',
    'crypto',
    'child_process'
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
  ]
}