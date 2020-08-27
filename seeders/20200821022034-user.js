'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {        
        firstName: 'dav',
        lastName: 'q',
        document: '12346',
        email: 'davq@mail.com',
        password: '123123123',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString()
      },
      {
        firstName: 'jef',
        lastName: 'g',
        document: '654321',
        email: 'jefg@mail.com',
        password: '12323',
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString()
      }
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
