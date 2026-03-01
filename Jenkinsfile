   pipeline{
    agent { label 'AGENT-1' }

    options {
        disableConcurrentBuilds()
    }

    stage('Flaky Test') {
    steps {
        sh 'node flaky-test.js'
    }
}
}
