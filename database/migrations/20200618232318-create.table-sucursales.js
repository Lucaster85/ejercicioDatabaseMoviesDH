'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.createTable('sucursales', {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
      },
      name: Sequelize.STRING,
      address: Sequelize.STRING,
      number: Sequelize.INTEGER
    });
   
  },

  down: (queryInterface, Sequelize) => {
    
     return queryInterface.dropTable('sucursales');
   
  }
};
