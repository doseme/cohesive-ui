import typescript from 'rollup-plugin-typescript2'
import sass from 'rollup-plugin-sass'
import commonjs from '@rollup/plugin-commonjs'

const createEntry = ({ format, file }) => {
  const config = {
    input: './src/index.ts',
    output: {
      file: './dist/' + file,
      format,
    },
    external: [
      'classnames',
      'react',
      'react-dom',
      'prop-types',
      '@fortawesome/react-fontawesome',
      '@fortawesome/free-solid-svg-icons',
      'moment',
    ],
    plugins: [
      commonjs(),
      typescript(),
      sass({
        output: true
      })
    ]
  }

  return config
}

export default [
  createEntry({ format: 'es', file: 'cohesive-ui.esm.js' }),
  createEntry({ format: 'cjs', file: 'cohesive-ui.cjs.js' }),
]
