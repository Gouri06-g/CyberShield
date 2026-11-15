pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Getting CyberShield source code'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Automated Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Frontend Build') {
            steps {
                bat 'npm run build'
            }
        }
    }

    post {
        success {
            echo 'CyberShield build and tests completed successfully!'
        }

        failure {
            echo 'Pipeline failed. Check the Console Output.'
        }

        always {
            archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
        }
    }
}