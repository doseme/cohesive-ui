node('docker') {
  try {
    properties(
        [
          parameters(
            [
              string(
                defaultValue: '',
                name: 'tag_name',
                description: 'String to tag the image with'
              )
            ]
          )
        ]
      )

      def tag

      if (params.tag_name) {
        tag = params.tag_name
      } else if (env.BRANCH_NAME == 'master') {
        tag = 'latest'
      } else if (env.BRANCH_NAME == 'develop') {
        tag = 'latest-dev'
      } else {
        tag = (env.BRANCH_NAME.replaceAll(/\//, "-"));
      }

      stage('Checkout repos') {
        checkout(
          [
            $class: 'GitSCM',
            branches: scm.branches,
            doGenerateSubmoduleConfigurations: scm.doGenerateSubmoduleConfigurations,
            extensions: scm.extensions,
            userRemoteConfigs: scm.userRemoteConfigs,
            extensions: [[
                $class: 'RelativeTargetDirectory',
                relativeTargetDir: 'typescript-utils'
              ]] + [[$class: 'CleanCheckout']]
          ]
        )
      }

      stage('Test') {
        docker.image('node:lts').inside {
          sh '''
                    cd typescript-utils &&
                    yarn install --cache-folder=../yarn-cache &&
                    yarn test
                '''
        }
      }

      stage('Build') {
        docker.image('node:lts').inside {
          sh '''
                    cd typescript-utils &&
                    yarn install --cache-folder=../yarn-cache &&
                    yarn build --cache-folder=../yarn-cache
                '''
        }
      }

      bitbucketStatusNotify(buildState: 'SUCCESSFUL')
  } catch (Exception e) {
    docker.image('node:lts').inside {
          sh '''
                    cd typescript-utils && rm -rf node_modules
             '''
    }
    bitbucketStatusNotify(buildState: 'FAILED')
    throw e
  }
}
