'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Members', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            unitId: {
                type: Sequelize.INTEGER,
                unsigned: true,
                notNull: true,
                length: 10,
                references: {
                    model: 'Units',
                    key: 'id'
                }
            },
            username: {
                type: Sequelize.STRING
            },
            emoji: {
                type: Sequelize.STRING
            },
            leader: {
                type: Sequelize.BOOLEAN
            },
            passwordHash: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Members');
    }
};