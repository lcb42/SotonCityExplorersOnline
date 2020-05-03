'use strict';
module.exports = (sequelize, DataTypes) => {
  const LoginAttempt = sequelize.define('LoginAttempt', {
    memberId: DataTypes.INTEGER
  }, {});
  LoginAttempt.associate = function(models) {
    LoginAttempt.belongsTo(Member);
  };
  return LoginAttempt;
};