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
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run lint'
                sh 'npm run test'
                sh 'npm run start &'
            }
        }
    }
}