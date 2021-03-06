'use strict';

const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("password", salt);

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return queryInterface.bulkInsert('Members', [{
            unitId: 1,
            username: 'Demo',
            emoji: 'wrench',
            leader: false,
            passwordHash: hash,
            createdAt: new Date(),
            updatedAt: new Date()
        }])
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Members', null, {});
    }
};
