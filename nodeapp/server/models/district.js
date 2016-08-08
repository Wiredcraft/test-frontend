"use strict";

module.exports = function(sequelize, DataTypes) {
  const District = sequelize.define("district", {
    name: DataTypes.STRING,
    lastInput: DataTypes.INTEGER,
    forms: DataTypes.INTEGER,
    voters: DataTypes.INTEGER,
    update: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        District.belongsTo(models.state);
        District.hasMany(models.township);
      }
    }
  });

  return District;
};
