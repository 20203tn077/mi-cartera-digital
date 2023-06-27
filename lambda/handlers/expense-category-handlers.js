const { result } = require('../utils/handler-utils.js')
const { ExpenseCategoryService } = require('../services/expense-category-service.js')

const GetExpenseCategoriesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetExpenseCategoriesIntent'
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!'

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse()
    }
}

const CreateExpenseCategoryIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'CreateExpenseCategoryIntent'
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!'

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse()
    }
}

const DeleteExpenseCategoryIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'DeleteExpenseCategoryIntent'
    },
    handle(handlerInput) {
        const speakOutput = 'Hello World!'

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse()
    }
}

module.exports = {}