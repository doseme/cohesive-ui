# Cohesive UI

A design system implemented using TypeScript and React, used throughout our products here at [DoseMe](https://doseme-rx.com).

View it live in Storybook [here](https://doseme.github.io/cohesive-ui/).

# Usage

We have some peer dependencies:

```sh
yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome moment react react-dom classnames use-onclickoutside
```

You can use the library like this:

```ts
// components
import { SmartList } from 'cohesive-ui'

// styles
import 'cohesive-ui/style/colors.scss'
```

You need to import the stylesheet too. `global.css` contains useful utilities, like `d-flex` and `p-5`, `m-3`, `w-100` helpers (taken from Bootstrap 4).

```
// Global stylesheet
import 'cohesive-ui/style/global.css';
import 'cohesive-ui/dist/cohesive-ui.esm.css';

// Optionally, get our colors:
@import 'cohesive-ui/style/colors.scss';
```

# Development 

### With Storybook

This repository has `storybook` set up and can be viewed using `yarn storybook`.

### Alongside your project

The easiest way to work on this library alongside developing and inspecting the changes in `your-project` is to remove the `cohesive-ui/` directory from `your-project/node_modules` after installing, and creating a symlink to the `dist` folder of your locally cloned `cohesive-ui` project (run `yarn build` if the dist folder does not exist).

To see changes made to `cohesive-ui` reflected in `your-project` in this way, you will need to run `yarn build` after every change to the UI (although is a major improvement from releasing minor versions just to be able to inspect changes). Developing new components with Storybook primarily is best practice, however.
