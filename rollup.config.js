import typescript from 'rollup-plugin-typescript2'
import sass from 'rollup-plugin-sass'

const createEntry = ({ format, file }) => {
  const config = {
    input: './src/index.ts',
    output: {
      file: './dist/' + file,
      format,
    },
    external: [
      'react',
      '@fortawesome/react-fontawesome',
      '@fortawesome/free-solid-svg-icons',
      'moment',
    ],
    plugins: [
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
