'use strict';
module.exports = (sequelize, DataTypes) => {
    const Point = sequelize.define('Point', {
        challengeId: DataTypes.INTEGER,
        score: DataTypes.INTEGER
    }, {});
    Point.associate = function (models) {
        Point.belongsTo(models.Member);
        Point.belongsTo(models.Challenge);
    };
    return Point;
};