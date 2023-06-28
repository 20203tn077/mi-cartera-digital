const Alexa = require('ask-sdk-core')
const { result, slot, handleRequest, confirm } = require('../utils/handler-utils')
const SalaryService = require('../services/salary-service')

const SetSalaryIntentHandler = {
  canHandle(handlerInput) {
    return handleRequest(handlerInput, 'SetSalaryIntent')
  },
  async handle(handlerInput) {
    if (!confirm(handlerInput)) return result('Operación cancelada')

    const salaryService = new SalaryService(handlerInput)
    const salary = slot(handlerInput, 'salary')

    await salaryService.setSalary(salary)
    return result(`Se configuró tu quincena con un monto de ${salary} pesos`)
  },
}

module.exports = {SetSalaryIntentHandler}