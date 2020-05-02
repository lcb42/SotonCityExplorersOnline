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
    db.createTable('attendance',
        {
            id: {
                type: 'int',
                unsigned: true,
                notNull: true,
                primaryKey: true,
                autoIncrement: true,
                length: 10
            },
            meeting_id: {
                type: 'int',
                unsigned: true,
                notNull: true,
                length: 10,
                foreignKey: {
                    name: 'attendance_meeting_id_fk',
                    table: 'meetings',
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
                    name: 'attendance_member_id_fk',
                    table: 'members',
                    rules: {
                        onUpdate: 'CASCADE',
                        onDelete: 'CASCADE'
                    },
                    mapping: 'id',
                }
            },
        }, function (err) {
            if (err) return callback(err);
            return callback();
        }
    );
};

exports.down = function (db, callback) {
    db.dropTable('attendance', callback);
};

exports._meta = {
    "version": 1
};
