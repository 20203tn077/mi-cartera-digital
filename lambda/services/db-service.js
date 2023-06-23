class DbService {
    _manager
    _attributes

    constructor(handlerInput) {
        this._manager = handlerInput.attributesManager
        this._attributes
    }

    async getAttributes() {
        return this._attributes = await this._manager.getPersistentAttributes() || {
            expenseCategories: [],
            incomeCategories: []
        }
    }

    async save() {
        this._manager.setPersistentAttributes(this._attributes)
        await this._manager.savePersistentAttributes()
    }
}

module.exports = DbService