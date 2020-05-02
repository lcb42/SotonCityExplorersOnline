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
    db.createTable('challenge_types',
        {
            id: {
                type: 'int',
                unsigned: true,
                notNull: true,
                primaryKey: true,
                autoIncrement: true,
                length: 10
            },
            name: {
                type: 'text'
            },
            icon: {
                type: 'string',
                length: 30
            }
        }, function (err) {
            if (err) return callback(err);
            return callback();
        }
    );

    db.createTable('challenges',
        {
            id: {
                type: 'int',
                unsigned: true,
                notNull: true,
                primaryKey: true,
                autoIncrement: true,
                length: 10
            },
            name: {
                type: 'text',
                notNull: true
            },
            description: {
                type: 'text'
            },
            image: {
                type: 'text'
            },
            start: {
                type: 'datetime'
            },
            end: {
                type: 'datetime'
            },
            unit_id: {
                type: 'int',
                unsigned: true,
                notNull: true,
                length: 10,
                foreignKey: {
                    name: 'challenge_unit_id_fk',
                    table: 'units',
                    rules: {
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE'
                    },
                    mapping: 'id',
                }
            }
        }, function (err) {
            if (err) return callback(err);
            return callback();
        }
    );
};

exports.down = function (db, callback) {
    db.dropTable('challenges', callback);
    db.dropTable('challenge_types', callback);
};

exports._meta = {
    "version": 1
};
