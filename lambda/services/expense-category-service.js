const DbService = require('./db-service.js')

class ExpenseCategoryService {
    _dbService

    constructor(handlerInput) {
        console.log(3)
        this._dbService = new DbService(handlerInput)
        console.log(4)
    }

    async getAll() {
        attributes = await this._dbService.getAttributes()
        return attributes.expenseCategories
    }

    async getActive() {
        console.log(6)
        const attributes = await this._dbService.getAttributes()
        console.log(9)
        return attributes.expenseCategories.filter(category => !category.deleted)
    }

    async getByName(name) {
        attributes = await this._dbService.getAttributes()
        return attributes.expenseCategories.filter(category => category.name === name)
    }

    async create(name) {
        attributes = await this._dbService.getAttributes()
        if (await this.getByName(name)) return
        attributes.expenseCategories.push({
            name: name,
            deleted : false
        })
        this._dbService.save()
    }

    async delete(name) {
        const category = await this.getByName(name)
        if (category) {
            category.deleted = true
            this._dbService.save()
        }
    }
}

module.exports = ExpenseCategoryService