'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('roles', [
      {
        name: 'Admin',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString()
      },
      {
        name: 'Guest',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString()
      }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('roles', null, {});
  }
};
