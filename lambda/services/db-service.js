class DbService {
  _manager
  _attributes

  constructor(handlerInput) {
    this._manager = handlerInput.attributesManager
    this._attributes
  }

  async getAttributes() {
    console.log(7)
    this._attributes = (await this._manager.getPersistentAttributes()) || {
      expenseCategories: [
        {
          name: 'Transporte',
          deleted: false,
        },
        {
          name: 'Comida',
          deleted: false,
        },
        {
          name: 'Salud',
          deleted: false,
        },
        {
          name: 'Casa',
          deleted: false,
        },
        {
          name: 'Regalos',
          deleted: false,
        },
        {
          name: 'Otros',
          deleted: false,
        },
      ],
      incomeCategories: [
        {
          name: 'Sueldo',
          deleted: false,
        },
      ],
      wallets: [
        {
          name: 'Efectivo',
          balance: 0,
          deleted: false,
        },
      ],
      salary: 0,
    }
    console.log(8)
    return this._attributes
  }

  async save() {
    this._manager.setPersistentAttributes(this._attributes)
    await this._manager.savePersistentAttributes()
  }
}

module.exports = DbService
