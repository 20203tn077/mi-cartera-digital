class DbService {
  _manager
  _attributes

  constructor(handlerInput) {
    this._manager = handlerInput.attributesManager
    this._attributes
  }

  async getAttributes() {
    return (this._attributes =
      (await this._manager.getPersistentAttributes()) || {
        expenseCategories: [
          'Transporte',
          'Comida',
          'Salud',
          'Casa',
          'Regalos',
          'Otros',
        ],
        incomeCategories: [
          'Sueldo'
        ],
        wallets: [
          'Efectivo'
        ],
        salary: 0,
      })
  }

  async save() {
    this._manager.setPersistentAttributes(this._attributes)
    await this._manager.savePersistentAttributes()
  }
}

module.exports = DbService
