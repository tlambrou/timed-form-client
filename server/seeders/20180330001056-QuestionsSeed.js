'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Questions', [
        { text: "What is your answer to question 1?", formId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10000 },
        { text: "What is your answer to question 2?", formId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10001 },
        { text: "What is your answer to question 3?", formId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10002 },
        { text: "What is your answer to question 4?", formId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10003 },
        { text: "What is your answer to question 5?", formId: 10000, createdAt: new Date(), updatedAt: new Date(), id: 10004 },
      ], {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Questions', null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
