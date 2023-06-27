const DbService = require('./db-service.js')

class ExpenseCategoryService {
    _dbService

    constructor(handlerInput) {
        this._dbService = new DbService(handlerInput)
    }

    async getExpenseCategories() {
        attributes = await this._dbService.getAttributes()
        return attributes['expenseCategories']
    }

    async createExpenseCategory() {

    }

    async deleteExpenseCategory() {

    }
}

module.exports = ExpenseCategoryService