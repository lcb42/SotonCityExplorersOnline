'use strict';
module.exports = (sequelize, DataTypes) => {
    const Member = sequelize.define('Member', {
        username: DataTypes.STRING,
        emoji: DataTypes.STRING,
        leader: DataTypes.BOOLEAN,
        passwordHash: DataTypes.STRING
    }, {});
    Member.associate = function (models) {
        Member.belongsTo(Unit);
        Member.hasMany(Point);
        Member.hasMany(Attendance);
        Member.hasMany(LoginAttempt);
    };
    return Member;
};