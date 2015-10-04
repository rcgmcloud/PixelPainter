'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
     'drawings',
      'title',
       Sequelize.STRING
);
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('drawings', 'title');
  }
};
