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
    db.createTable('members',
        {
            id: {
                type: 'int',
                unsigned: true,
                notNull: true,
                primaryKey: true,
                autoIncrement: true,
                length: 10
            },
            username: {
                type: 'string',
                length: 50
            },
            emoji: {
                type: 'string',
                length: 30
            },
            is_leader: {
                type: 'boolean'
            },
            unit_id: {
                type: 'int',
                unsigned: true,
                notNull: true,
                length: 10,
                foreignKey: {
                    name: 'member_unit_id_fk',
                    table: 'units',
                    rules: {
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE'
                    },
                    mapping: 'id',
                }
            },
            password_hash: {
                type: 'string',
                length: '100'
            }
        }, function (err) {
            if (err) return callback(err);
            return callback();
        }
    );
};

exports.down = function (db, callback) {
    db.dropTable('members', callback);
};

exports._meta = {
    "version": 1
};
