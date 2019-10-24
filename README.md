# cohesive-ui
the best ui

### Installation

#### Locally with `yarn link`
- Clone `cohesive-ui` repository
- `yarn link` inside cloned repository
- Change directory to your repository
- `yarn link cohesive-ui` to be able to import from this repository locally

#### Via `package.json`
- Make sure you are using SSH auth for GitHub.
- Run the following command: `git config --global url."git@github.com:".insteadOf "https://github.com"`
- Add the following line to `dependencies`: `"cohesive-ui": "git+https://github.com/doseme/cohesive-ui.git"`
