"use strict";

module.exports = function(sequelize, DataTypes) {
  const State = sequelize.define("state", {
    name: DataTypes.STRING,
    lastInput: DataTypes.INTEGER,
    forms: DataTypes.INTEGER,
    voters: DataTypes.INTEGER,
    update: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        State.hasMany(models.district);
      }
    }
  });

  return State;
};
