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
        return queryInterface.bulkDelete('Units', null, {});
    }
};
