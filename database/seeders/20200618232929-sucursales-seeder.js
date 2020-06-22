'use strict';

let faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    let sucursales = [];

    for(let i = 0; i<1000; i++){
      let sucursal = {
        name: faker.address.streetName(),
        address: faker.address.city(''),
        number: faker.random.number(9999)
      }
      sucursales.push(sucursal)
    }
    

      return queryInterface.bulkInsert('sucursales', sucursales, {});
   
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkDelete('People', null, {});
  
  }
};
