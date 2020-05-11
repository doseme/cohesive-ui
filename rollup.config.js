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
      'react-bootstrap',
      'react-bootstrap/Row',
      'react-bootstrap/Col',
      'react-bootstrap/ListGroup',
      '@fortawesome/react-fontawesome',
      '@fortawesome/free-solid-svg-icons',
      'react-bootstrap/Form',
      'react-bootstrap/InputGroup',
      'react-bootstrap/Button',
      'react-bootstrap/OverlayTrigger',
      'react-bootstrap/Tooltip',
      'react-bootstrap/Navbar',
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
