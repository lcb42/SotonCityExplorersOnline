'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Units', [
                {
                    name: 'Enterprise',
                    image: '/logos/Enterprise.png',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    name: 'Kraken',
                    image: '/logos/Kraken.png',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }],
            {});
    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */
    }
};
