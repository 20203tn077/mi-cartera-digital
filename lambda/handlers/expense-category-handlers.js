const Alexa = require('ask-sdk-core')
const { result, slot, handleRequest } = require('../utils/handler-utils')
const ExpenseCategoryService = require('../services/expense-category-service')

const GetExpenseCategoriesIntentHandler = {
  canHandle(handlerInput) {
    console.log(1)
    return handleRequest(handlerInput, 'GetExpenseCategoriesIntent')
  },
  async handle(handlerInput) {
    console.log(2)
    const expenseCategoryService = new ExpenseCategoryService(handlerInput)
    console.log(5)
    const categories = await expenseCategoryService.getActive()
    const speakOutput = `Las categorías de gasto son: ${categories.map(category => category.name).join(', ')}`

    return result(speakOutput)
  },
}

const CreateExpenseCategoryIntentHandler = {
  canHandle(handlerInput) {
    return handleRequest(handlerInput, 'CreateExpenseCategoryIntent')
  },
  async handle(handlerInput) {
    const category = slot(handlerInput, 'category')
    const expenseCategoryService = new ExpenseCategoryService(handlerInput)

    await expenseCategoryService.create(category)
    const speakOutput = `Se creó la categoría ${category}`

    return result(speakOutput)
  },
}

const DeleteExpenseCategoryIntentHandler = {
  canHandle(handlerInput) {
    return handleRequest(handlerInput, 'DeleteExpenseCategoryIntent')
  },
  async handle(handlerInput) {
    const category = slot(handlerInput, 'category')
    const expenseCategoryService = new ExpenseCategoryService(handlerInput)

    await expenseCategoryService.delete(category)
    const speakOutput = `Se desactivó la categoría ${category}`
    
    return result(speakOutput)
  },
}

module.exports = {
  GetExpenseCategoriesIntentHandler,
  CreateExpenseCategoryIntentHandler,
  DeleteExpenseCategoryIntentHandler,
}
