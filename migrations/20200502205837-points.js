'use strict';

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function (options, seedLink) {
    dbm = options.dbmigrate;
    type = dbm.dataType;
    seed = seedLink;
};

exports.up = function (db, callback) {
    db.createTable('points',
        {
            id: {
                type: 'int',
                unsigned: true,
                notNull: true,
                primaryKey: true,
                autoIncrement: true,
                length: 10
            },
            challenge_id: {
                type: 'int',
                unsigned: true,
                notNull: true,
                length: 10,
                foreignKey: {
                    name: 'challenge_point_id_fk',
                    table: 'challenges',
                    rules: {
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE'
                    },
                    mapping: 'id',
                }
            },
            member_id: {
                type: 'int',
                unsigned: true,
                notNull: true,
                length: 10,
                foreignKey: {
                    name: 'points_member_id_fk',
                    table: 'members',
                    rules: {
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE'
                    },
                    mapping: 'id',
                }
            },
            score: {
                type: 'int',
                length: 10
            }
        }, function (err) {
            if (err) return callback(err);
            return callback();
        }
    );
};

exports.down = function (db, callback) {
    db.dropTable('points', callback);
};

exports._meta = {
    "version": 1
};
