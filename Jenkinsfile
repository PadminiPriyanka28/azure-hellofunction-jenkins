pipeline {
    agent any

    environment {
        FUNCTION_APP_NAME = 'AzureHelloFunction'
        RESOURCE_GROUP = 'AzureFunction'
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Archive') {
            steps {
                sh 'zip -r function.zip *'
            }
        }

        stage('Deploy') {
            steps {
                withCredentials([
                    string(credentialsId: 'azure-client-id', variable: 'AZURE_CLIENT_ID'),
                    string(credentialsId: 'azure-client-secret', variable: 'AZURE_CLIENT_SECRET'),
                    string(credentialsId: 'azure-tenant-id', variable: 'AZURE_TENANT_ID')
                ]) {
                    sh """
                        az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET --tenant $AZURE_TENANT_ID
                        az functionapp deployment source config-zip \
                          --resource-group $RESOURCE_GROUP \
                          --name $FUNCTION_APP_NAME \
                          --src function.zip
                    """
                }
            }
        }
    }
}
