'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => { //queryInterface : generador de querys, Sequielize : objeto Sequelize
     
      return queryInterface.createTable('users', { id: Sequelize.INTEGER }); //crea la tabla users
    
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('users'); //borra la tabla
  }
};
