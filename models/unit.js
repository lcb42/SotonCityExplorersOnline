'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define('Unit', {
    name: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Unit.associate = function(models) {
    Unit.hasMany(models.Member);
    Unit.hasMany(models.Challenge);
    Unit.hasMany(models.Meeting);
  };
  return Unit;
};