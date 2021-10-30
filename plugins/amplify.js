import Vue from 'vue'
import Amplify from 'aws-amplify'

const awsExports = {
    "aws_project_region": process.env.AWS_PROJECT_REGION,
    "aws_appsync_graphqlEndpoint": process.AWS_APPSYNC_GRAPHQLENDPOINT,
    "aws_appsync_region": process.AWS_APPSYNC_REGION,
    "aws_appsync_authenticationType": process.AWS_APPSYNC_AUTHENTICATIONTYPE,
    "aws_appsync_apiKey": process.AWS_APPSYNC_APIKEY
}

Amplify.configure(awsExports)
Vue.use(Amplify)
