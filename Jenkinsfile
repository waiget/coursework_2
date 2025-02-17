pipeline {
    environment {
        registry = 'waiget/coursework2'
        registryCredential = 'Docker'
        registryUrl = 'https://registry.hub.docker.com'
        CI = 'true'
    }
    agent any
    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:6-alpine'
                    args '-p 3000:3000'
                }
            }
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            agent {
                docker {
                    image 'node:6-alpine'
                    args '-p 3000:3000'
                }
            }
            steps {
                sh 'npm run lint'
                sh 'npm run test'
                sh 'npm run start &'
            }
        }
        stage("Push to Docker") {
            steps {
                script {
                    def img =docker.build(registry)
                    docker.withRegistry(registryUrl, registryCredential) {
                        img.push("${env.BUILD_ID}")
                        img.push("latest")
                    }
                }
            }
        }
        stage("Deploy to K8s") {
            steps {
                sleep(10)
                script {
                    sshPublisher(
                        continueOnError: false, failOnError: true,
                        publishers: [
                            sshPublisherDesc(
                                configName: "Production VM",
                                verbose: true,
                                transfers: [
                                    sshTransfer(
                                        execCommand: "kubectl set image deployments/coursework2 coursework2=waiget/coursework2:${env.BUILD_ID}"
                                    )
                                ]
                            )
                        ]
                    )
                }
            }
        }
    }
}