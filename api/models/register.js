'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Register extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Register.belongsTo(models.Person)
      Register.belongsTo(models.Class)
    }
  }
  Register.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Register',
  });
  return Register;
};