'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AbsentDones', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATEONLY
      },
      time: {
        type: Sequelize.TIME
      },
      datetime: {
        type: Sequelize.DATE
      },
      tgl_proses: {
        type: Sequelize.DATEONLY
      },
      proses_tarik: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AbsentDones');
  }
};