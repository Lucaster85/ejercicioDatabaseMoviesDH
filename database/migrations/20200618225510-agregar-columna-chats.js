'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.addColumn('chats', 'messege', {
         
           type: Sequelize.STRING,
           allownull: false
          });
   
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
