pipeline {
    agent { docker { image 'stefan01andrej/test-repo:api-test' } }
      stages {
        stage('log version info') {
      steps {
        sh 'docker run -d --name testBrate stefan01andrej/test-repo:api-test'
      }
    }
  }
}