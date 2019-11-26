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
                sh 'kill -9 `lsof -t -i:8900`'
            }
        }
    }
}