const Services = require('./Services')
const database = require('../models')

class PeopleServices extends Services {
  constructor(){
    super('People')
    this.registers = new Services('Registers')
  }
  
  async getActiveOne(where = {}){
    return database[this.modelName].findAll({ where: { ...where } })
  }

  async getAll(where = {}){
    return database[this.modelName]
      .scope('all')
      .findAll({ where: { ...where } })
  }

  async cancelPersonAndRegister(studentId){
    return database.sequelize.transaction(async transaction => { 
      await super.update({ active: false }, studentId, { transaction: transaction })
      await this.registers.update({ status: 'cancel' }, { student_id: studentId }, { transaction: transaction })
    })
  }

  async getRegisterToStudent(where = {}) {
    const registers = await database[this.modelName]
      .findOne({ where: { ...where } })
    return registers.getRegisterClasses()
  }
}

module.exports = PeopleServices