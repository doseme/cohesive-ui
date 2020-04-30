import typescript from 'rollup-plugin-typescript2'
import sass from 'rollup-plugin-sass'

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'es',
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
