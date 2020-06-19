'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('chats', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    }
  });
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.dropTable('chats');
    
  }
};
