const DbService = require('./db-service.js')

class SalaryService {
    _dbService

    constructor(handlerInput) {
        this._dbService = new DbService(handlerInput)
    }

    async setSalary(salary) {
        attributes = await this._dbService.getAttributes()
        attributes.salary = salary
        await this._dbService.save()
    }
}

module.exports = SalaryService