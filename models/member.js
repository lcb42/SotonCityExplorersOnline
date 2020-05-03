'use strict';
module.exports = (sequelize, DataTypes) => {
    const Member = sequelize.define('Member', {
        username: DataTypes.STRING,
        emoji: DataTypes.STRING,
        leader: DataTypes.BOOLEAN,
        passwordHash: DataTypes.STRING
    }, {});
    Member.associate = function (models) {
        Member.belongsTo(models.Unit);
        Member.hasMany(models.Point);
        Member.hasMany(models.Attendance);
        Member.hasMany(models.LoginAttempt);
    };
    return Member;
};