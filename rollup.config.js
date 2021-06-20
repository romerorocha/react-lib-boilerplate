import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'

import packageJson from './package.json'

const declarationProps = { declaration: true, declarationDir: './build/', rootDir: 'src/' }

export default [
  // CommonJS
  {
    input: 'src/index.ts',
    output: { dir: './', entryFileNames: packageJson.main, format: 'cjs' },
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript(declarationProps), postcss()],
  },

  // ES
  {
    input: 'src/index.ts',
    output: { file: packageJson.module, format: 'esm' },
    plugins: [peerDepsExternal(), resolve(), commonjs(), typescript(), postcss()],
  },
]
