const database = require('../models')

class Services {
  constructor(modelName) {
    this.modelName = modelName
  }

  async getAll(where = {}) {
    return database[this.modelName].findAll({ where: { ...where } })
  }

  async getOne(where = {}) {
    return database[this.modelName].findOne({ where: { ...where } })
  }

  async create(dados) {
    return database[this.modelName].create(dados)
  }

  async update(updateData, id, transaction = {}){
    return database[this.modelName]
      .update(updateData, { where: { id: id } }, transaction)
  }

  async updateMany(updateData, where, transaction = {}){
    return database[this.modelName]
      .update(updateData, { where: { ...where } }, transaction)
  }

  async remove(id) {
    return database[this.modelName].destroy({ where: { id: id } })
  }

  async restore(id) {
    return database[this.modelName].restore({ where: { id: id } })
  }

  async findDeleteOne(id) {
    return database[this.modelName]
      .findOne({ paranoid: false, where: { id: Number(id) } })
  }

  async findAndCount(where = {}, aggregators) {
    return database[this.modelName]
      .findAndCountAll({ where: { ...where }, ...aggregators })
  }

}

module.exports = Services