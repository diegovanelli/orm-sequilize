'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Person.hasMany(models.Class , {
        foreignKey: 'teacher_id'
      });
      Person.hasMany(models.Register, {
        foreignKey: 'student_id'
      });
    }
  }
  Person.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        validateFunction: function(data) {
          if (data.length < 3) throw new Error('The minimum is three characters.')
        }
      }
    },
    active: DataTypes.BOOLEAN,
    mail: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email!'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
    paranoid: true,
    defaultScope: {
      where: { active: true }
    },
    scopes: {
      all: { where: {} }
    }
  });
  return Person;
};