import Vue from 'vue'
import Amplify from 'aws-amplify'
// import awsExports from '@/src/aws-exports'

const awsExports = {
    "aws_project_region": process.env.ENV_PROJECT_REGION,
    "aws_appsync_graphqlEndpoint": process.env.ENV_APPSYNC_GRAPHQLENDPOINT,
    "aws_appsync_region": process.env.ENV_APPSYNC_REGION,
    "aws_appsync_authenticationType": process.env.ENV_APPSYNC_AUTHENTICATIONTYPE,
    "aws_appsync_apiKey": process.env.ENV_APPSYNC_APIKEY
}

Amplify.configure(awsExports)
Vue.use(Amplify)
