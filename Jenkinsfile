pipeline {
    agent any
    tools {
        maven "MAVEN3"
        jdk "OracleJDK21"
    }

    stages {
        stage('Fetch Code') {
            steps {
                git branch: 'chore/deploy-21-04-2024', url: 'https://github.com/WojciechGos/sumarize-yt-transcription-microservices.git'
            }
        }

        stage('Build') {
            steps {
                dir('server') {
                    sh 'mvn clean package'
                }
            }
            post {
                success {
                    echo 'Archiving artifacts now.'
                    archiveArtifacts artifacts: '**/*.jar'
                }
            }
        }
        stage('UNIT TEST'){
            steps {
                dir('server') {
                    sh 'mvn test'
                }
            }
        }
    }
}