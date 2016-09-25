"use strict";

module.exports = function(sequelize, DataTypes) {
  const Township = sequelize.define("township", {
    name: DataTypes.STRING,
    lastInput: DataTypes.INTEGER,
    forms: DataTypes.INTEGER,
    voters: DataTypes.INTEGER,
    update: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Township.belongsTo(models.district);
      }
    }
  });

  return Township;
};
