const Alexa = require('ask-sdk-core')

// DynamoDB
const AWS = require('aws-sdk')
const ddbAdapter = require('ask-sdk-dynamodb-persistence-adapter')

// Default handlers
const {
    LaunchRequestHandler,
    HelloWorldIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    FallbackIntentHandler,
    SessionEndedRequestHandler,
    IntentReflectorHandler,
    ErrorHandler
} = require('./handlers/default-handlers')


exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloWorldIntentHandler,

    // Custom handlers

    HelpIntentHandler,
    CancelAndStopIntentHandler,
    FallbackIntentHandler,
    SessionEndedRequestHandler,
    IntentReflectorHandler,
  )
  .addErrorHandlers(
    ErrorHandler
  )
  .withCustomUserAgent('sample/hello-world/v1.2')
  // DynamoDB
  .withPersistenceAdapter(
    new ddbAdapter.DynamoDbPersistenceAdapter({
      tableName: process.env.DYNAMODB_PERSISTENCE_TABLE_NAME,
      createTable: false,
      dynamoDBClient: new AWS.DynamoDB({
        apiVersion: 'latest',
        region: process.env.DYNAMODB_PERSISTENCE_REGION,
      }),
    })
  )
  .lambda()
