'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  User.associate = function(models) {
    // User has many Answers
    models.User.hasMany(models.Answer, {
      foreignKey: 'userId'
    });
  };

  return User;
};
