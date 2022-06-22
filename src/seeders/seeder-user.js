'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{

      email: 'admin@gmail.com',
      password: '123456',
      firstName: 'HoidanIt',
      lastName: 'Eric',
      address: 'USA',
      gender: 1,
      phonenumber: "0386896160",
      image: "aaaaaaaaaaaaaa",
      roleId: "1236655",
      positionId: "BSCK",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
