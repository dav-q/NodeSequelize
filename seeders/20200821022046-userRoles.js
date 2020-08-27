'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_roles', [
      {
        user_id: 1,
        rol_id: 1,
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString()
      },
      {
        user_id: 2,
        rol_id: 2,
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString()
      }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_roles', null, {});
  }
};
