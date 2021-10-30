import Vue from 'vue'
import Amplify from 'aws-amplify'

const awsExports = {
    "aws_project_region": __NUXT__.config.aws_project_region,
    "aws_appsync_graphqlEndpoint": __NUXT__.config.aws_appsync_graphqlEndpoint,
    "aws_appsync_region": __NUXT__.config.aws_appsync_region,
    "aws_appsync_authenticationType": __NUXT__.config.aws_appsync_authenticationType,
    "aws_appsync_apiKey": __NUXT__.config.aws_appsync_apiKey,
}

Amplify.configure(awsExports)
Vue.use(Amplify)
