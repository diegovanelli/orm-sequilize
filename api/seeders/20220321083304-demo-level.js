'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Levels', [
      {
        level_desc: 'Basic',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level_desc: 'Medium',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        level_desc: 'Advanced',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Levels', null, {})
  }
};
