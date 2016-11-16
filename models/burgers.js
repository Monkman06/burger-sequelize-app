'use strict';
module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define('burgers', {
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    date: DataTypes.DATE,
    createAt: DataTypes.DATE,
    updateAt: DataTypes.DATE

  }, {
    classMethods:{
      associates: function(models){
    }
    }
  });
  return burgers;
};