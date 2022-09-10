pipeline {
    agent any

    stages {
        stage('checkout') {
            steps {
                echo 'checkout stage'
                checkout([$class: 'GitSCM', branches: [[name: 'master']], browser: [$class: 'CGit', repoUrl: 'https://197.156.93.110/plugins/git/xokageothermal/WebApplicationMyTask'], extensions: [[$class: 'UserIdentity', email: 'josephabate1921@gmail.com', name: 'yosef2022']], userRemoteConfigs: [[credentialsId: 'alternatePipelineCred', url: 'https://197.156.93.110/plugins/git/xokageothermal/WebApplicationMyTask.git']]])
            }
        }

        stage('build') {
            steps {
                echo 'building stage'
                sh 'npm install'
                sh 'npm build --prod'
            }
        }

    }

}
