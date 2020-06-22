'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    let messeges = []

    for(let i=0; i<1000; i++){
      messeges.push({
        messege: 'blablabla'
      })
    }

      return queryInterface.bulkInsert('chats', messeges, {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('chats', null, {});
    
  }
};
