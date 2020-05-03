'use strict';
module.exports = (sequelize, DataTypes) => {
  const Challenge = sequelize.define('Challenge', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {});
  Challenge.associate = function(models) {
    Challenge.belongsTo(models.Unit);
  };
  return Challenge;
};