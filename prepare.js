const { execSync } = require('child_process')

if (process.env.NODE_ENV === 'production') {
  console.log('Installing deps')
  execSync('yarn install')
  console.log('Building Cohesive-UI')
  execSync('yarn build')
}

