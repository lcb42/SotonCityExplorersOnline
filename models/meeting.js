'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meeting = sequelize.define('Meeting', {
    meetingStart: DataTypes.DATE,
    meetingEnd: DataTypes.DATE,
    name: DataTypes.TEXT,
    description: DataTypes.TEXT
  }, {});
  Meeting.associate = function(models) {
    Meeting.belongsTo(models.Unit);
  };
  return Meeting;
};