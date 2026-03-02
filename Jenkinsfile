   pipeline{
    agent { label 'AGENT-1' }
    stages{  
     stage('Flaky Test') {
    steps {
        sh 'node test.js'
       echo "pipeline is triggred from web hook"
    }
}
   }
   }
