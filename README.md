# Cohesive UI

A design system implemented using TypeScript and React, used throughout our products here at [DoseMe](https://doseme-rx.com).

View it live in Storybook [here](https://doseme.github.io/cohesive-ui/).

# Usage

```ts
// components
import { SmartList } from 'cohesive-ui'

// styles
import 'cohesive-ui/style/colors.scss'
```

# Development 

### With Storybook

This repository has `storybook` set up and can be viewed using `yarn storybook`.

### Alongside your project

The easiest way to work on this library alongside developing and inspecting the changes in `your-project` is to remove the `cohesive-ui/` directory from `your-project/node_modules` after installing, and creating a symlink to the `dist` folder of your locally cloned `cohesive-ui` project (run `yarn build` if the dist folder does not exist).

To see changes made to `cohesive-ui` reflected in `your-project` in this way, you will need to run `yarn build` after every change to the UI (although is a major improvement from releasing minor versions just to be able to inspect changes). Developing new components with Storybook primarily is best practice, however.
