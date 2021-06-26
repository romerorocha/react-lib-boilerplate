import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

import packageJson from './package.json'

const plugins = [peerDepsExternal(), resolve(), commonjs(), postcss(), terser()]
const exclude = ['node_modules', 'lib', 'src/**/*stories.tsx', 'src/**/*.test.*']
const tsConfig = { declaration: true, declarationDir: './lib', rootDir: 'src/', exclude }

export default [
  // CommonJS
  {
    input: 'src/index.ts',
    output: { dir: './', entryFileNames: packageJson.main, format: 'cjs' },
    plugins: [...plugins, typescript(tsConfig)],
  },

  // ES
  {
    input: 'src/index.ts',
    output: { file: packageJson.module, format: 'esm' },
    plugins: [...plugins, typescript({ exclude })],
  },
]
