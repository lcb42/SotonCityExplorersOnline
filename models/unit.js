'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define('Unit', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Unit.associate = function(models) {
    Unit.hasMany(Member);
    Unit.hasMany(Challenge);
    Unit.hasMany(Meeting);
  };
  return Unit;
};