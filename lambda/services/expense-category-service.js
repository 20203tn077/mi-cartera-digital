const DbService = require('./db-service.js')

class ExpenseCategoryService {
    _dbService

    constructor(handlerInput) {
        this._dbService = new DbService(handlerInput)
    }

    async getExpenseCategories() {
        attributes = await this._dbService.getAttributes()
        return attributes.expenseCategories
    }

    async createExpenseCategory(category) {
        attributes = await this._dbService.getAttributes()
        if (attributes.expenseCategories.indexOf(category) === -1) return
        attributes.expenseCategories.push(category)
        this._dbService.save()
    }

    async deleteExpenseCategory(category) {
        attributes = await this._dbService.getAttributes()
        const i = attributes.expenseCategories.indexOf(category)
        if (i === -1) return
        attributes.expenseCategories.splice(i, 1)
        this._dbService.save()
    }
}

module.exports = ExpenseCategoryService