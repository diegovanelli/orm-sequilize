'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Classes', [
			{
				begin_date: "2020-02-01",
				level_id: 1,
				teacher_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()				 
			},
			{
				begin_date: "2020-02-01",
				level_id: 2,
				teacher_id: 5,
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				begin_date: "2020-02-01",
				level_id: 3,
				teacher_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
				},
			{
				begin_date: "2020-07-01",
				level_id: 3,
				teacher_id: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
			}
		], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Classes', null, {})
  }
};
