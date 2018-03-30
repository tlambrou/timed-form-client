'use strict';
module.exports = (sequelize, DataTypes) => {
  var Question = sequelize.define('Question', {
    text: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Question.associate = function(models) {
    // Question has many Answers
    models.Question.hasMany(models.Answer, {
      foreignKey: 'questionId'
    });
  };

  return Question;
};
