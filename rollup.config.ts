import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

import packageJson from './package.json'

const plugins = [peerDepsExternal(), resolve(), commonjs(), postcss(), terser()]

export default [
  // CommonJS
  {
    input: 'src/index.ts',
    output: { dir: './', entryFileNames: packageJson.main, format: 'cjs' },
    plugins: [
      ...plugins,
      typescript({
        declaration: true,
        declarationDir: './lib',
        rootDir: 'src/',
        exclude: ['node_modules', 'lib', 'src/**/*stories.tsx', 'src/**/*.test.*'],
      }),
    ],
  },

  // ES
  {
    input: 'src/index.ts',
    output: { file: packageJson.module, format: 'esm' },
    plugins: [
      ...plugins,
      typescript({ exclude: ['node_modules', 'lib', 'src/**/*stories.tsx', 'src/**/*.test.*'] }),
    ],
  },
]
