'use strict';
module.exports = (sequelize, DataTypes) => {
  var Form = sequelize.define('Form', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Form.associate = function(models) {
    // Form has many Questions
    models.Form.hasMany(models.Question, {
      foreignKey: 'formId'
    });
  };

  return Form;
};
