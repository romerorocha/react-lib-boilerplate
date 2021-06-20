import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

import packageJson from './package.json'

const plugins = [peerDepsExternal(), resolve(), commonjs(), postcss(), terser()]
const declarationProps = { declaration: true, declarationDir: './build/types', rootDir: 'src/' }

export default [
  // CommonJS
  {
    input: 'src/index.ts',
    output: { dir: './', entryFileNames: packageJson.main, format: 'cjs' },
    plugins: [...plugins, typescript(declarationProps)],
  },

  // ES
  {
    input: 'src/index.ts',
    output: { file: packageJson.module, format: 'esm' },
    plugins: [...plugins, typescript()],
  },
]
