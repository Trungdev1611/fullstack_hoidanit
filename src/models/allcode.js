'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { //phan tao khoa ngoai - moi lien he giua cac table
      // define association here
    }
  };
  Allcode.init({ // phan khoi tao field

    key: DataTypes.STRING,
    type: DataTypes.STRING,
    value_EN: DataTypes.STRING,
    value_VI: DataTypes.STRING,

  }, {
    sequelize,
    modelName: 'Allcode',
  });
  return Allcode;
}