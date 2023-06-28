const Alexa = require('ask-sdk-core')
const { result, slot } = require('../utils/handler-utils')
const ExpenseCategoryService = require('../services/expense-category-service')

const GetExpenseCategoriesIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetExpenseCategoriesIntent'
    )
  },
  async handle(handlerInput) {
    const expenseCategoryService = new ExpenseCategoryService(handlerInput)
    const categories = await expenseCategoryService.getExpenseCategories()
    const speakOutput = `Las categorías de gasto son: ${categories.join(', ')}`
    return result(speakOutput)
  },
}

const CreateExpenseCategoryIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'CreateExpenseCategoryIntent'
    )
  },
  handle(handlerInput) {
    const speakOutput = 'Hello World!'

    return result('')
  },
}

const DeleteExpenseCategoryIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest' &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === 'DeleteExpenseCategoryIntent'
    )
  },
  handle(handlerInput) {
    const speakOutput = 'Hello World!'

    return result('')
  },
}

module.exports = {
  GetExpenseCategoriesIntentHandler,
  CreateExpenseCategoryIntentHandler,
  DeleteExpenseCategoryIntentHandler,
}
