'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AbsentDone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AbsentDone.init({
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME,
    datetime: DataTypes.DATE,
    tgl_proses: DataTypes.DATEONLY,
    proses_tarik: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AbsentDone',
    timestamps: false
  });
  return AbsentDone;
};