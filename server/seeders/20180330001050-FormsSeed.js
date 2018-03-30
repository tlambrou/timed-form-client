'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {


    return queryInterface.bulkInsert('Forms', [
        { name: "Strive Talent Questions", createdAt: new Date(), updatedAt: new Date(), id: 10000 },
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
  return queryInterface.bulkDelete('Forms', null, {});

  /*
  Add reverting commands here.
  Return a promise to correctly handle asynchronicity.

  Example:
  return queryInterface.bulkDelete('Person', null, {});
  */
}
};
