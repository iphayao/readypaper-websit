pipeline {
    agent {
        kubernetes {
          yamlFile 'deploy/kubernetes-pod.yaml'
        }
    }
    stages {
        stage('Build Image') {
            steps {
                container('docker') {
                    sh 'docker build -t localhost:32000/readypaper-website .'
                }
            }
        }
        stage('Push Image') {
            steps {
                container('docker') {
                     sh 'docker push localhost:32000/readypaper-website'
                }
            }
        }
        stage('Deployment') {
            steps {
                container('kubectl') {
                     sh 'kubectl delete -f deploy/deployment.yaml -n default --ignore-not-found=true'
                     sh 'kubectl apply -f deploy/deployment.yaml -n default'
                }
            }
        }
    }
}
