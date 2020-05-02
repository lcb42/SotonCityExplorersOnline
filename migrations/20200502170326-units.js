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
    db.createTable('units',
        {
            id: {
                type: 'int',
                unsigned: true,
                notNull: true,
                primaryKey: true,
                autoIncrement: true,
                length: 10
            },
            unit_name: {
                type: 'string',
                length: 50
            },
            image: {
                type: 'text'
            }
        }, function(err) {
            if (err) return callback(err);
            return callback();
        }
    );


};

exports.down = function (db, callback) {
    db.dropTable('units', callback);
};

exports._meta = {
    "version": 1
};
