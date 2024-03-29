'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Registers', [
			{
				status: "confirmed",
				student_id: 1,
				class_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
			status: "confirmed",
			student_id: 2,
			class_id: 1,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmed",
			student_id: 3,
			class_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmed",
			student_id: 4,
			class_id: 3,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "canceled",
			student_id: 1,
			class_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "canceled",
			student_id: 2,
			class_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {})
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Registers', null, {})
  }
};
