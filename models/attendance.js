'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    meetingId: DataTypes.INTEGER,
    memberId: DataTypes.INTEGER
  }, {});
  Attendance.associate = function(models) {
    Attendance.belongsTo(Meeting);
    Attendance.belongsTo(Member);
  };
  return Attendance;
};