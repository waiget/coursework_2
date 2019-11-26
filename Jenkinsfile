pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    stages {
        // stage('Build') {
        //     steps {
        //         sh 'npm install'
        //     }
        // }
        stage('Test') { 
            steps {
                sh 'node server.js &'
                sh 'sudo kill -9 `sudo lsof -t -i:8900`'
            }
        }
    }
}