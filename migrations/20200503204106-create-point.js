'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Points', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            challengeId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Challenges',
                    key: 'id'
                }
            },
            memberId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Members',
                    key: 'id'
                }
            },
            score: {
                type: Sequelize.INTEGER
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
        return queryInterface.dropTable('Points');
    }
};