const Alexa = require('ask-sdk-core')

const result = (handlerInput, message, reprompt) => {
  let result = handlerInput.responseBuilder
  result = result.speak(message)
  if (reprompt) result = result.reprompt(message)
  return result.getResponse()
}

const slot = (handlerInput, key) => handlerInput.requestEnvelope.request.intent.slots[key]?.value

const confirm = (handlerInput) => handlerInput.requestEnvelope.request.intent.confirmationStatus === 'CONFIRMED'

const handleRequest = (handlerInput, intentName) => {
  return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
  && Alexa.getIntentName(handlerInput.requestEnvelope) === intentName
}

module.exports = { result, slot, confirm, handleRequest }