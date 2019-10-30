# cohesive-ui
the best ui

Development:
You will need to prevent `react-bootstrap` from loading its bundled version of React into the project you import this library into, otherwise there will be duplicate versions. The easiest way to do this is to create a symlink in your dev environment for this library to the project that uses it, and import `react-bootstrap` as `import * as BS from 'react-bootstrap`, `<BS.Component/>` whenever you create new components in this repository.
- `yarn install`
- `rm node_modules/react_bootstrap`
- `ln -s /full/path/to/main/project/node_modules/react-bootstrap /full/path/to/this/repo/node_modules/react-bootstrap`
- `yarn link`
- And run `yarn link cohesive-ui` in your project.
