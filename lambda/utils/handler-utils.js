const result = (handlerInput, message, reprompt) => {
    let result = handlerInput.responseBuilder
    result = result.speak(message)
    if (reprompt) result = result.reprompt(message)
    return result.getResponse()
}

module.exports = {result}