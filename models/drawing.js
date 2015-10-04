'use strict';
module.exports = function(sequelize, DataTypes) {
  var drawing = sequelize.define('drawing', {
    data: DataTypes.JSON
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return drawing;
};