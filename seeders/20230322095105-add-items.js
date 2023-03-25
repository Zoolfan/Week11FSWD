'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Items",[{
      name: "latihan",
      status: "active",
      type: "latihan",
      createdAt : new Date() ,
      updatedAt : new Date() ,
    }])
    await queryInterface.bulkInsert("Items",[{
      name: "bulk",
      status: "active",
      type: "latihan",
      createdAt : new Date() ,
      updatedAt : new Date() ,
    }])
    await queryInterface.bulkInsert("Items",[{
      name: "insert",
      status: "active",
      type: "latihan",
      createdAt : new Date() ,
      updatedAt : new Date() ,
    }])
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("items",null,{})
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
