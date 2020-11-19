"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Advertisement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      Advertisement.belongsTo(models.Business, {
        foreignKey: {
          allowNull: false
        }
      });
    }
  }
  Advertisement.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      prodName: DataTypes.STRING,
      prodImg: DataTypes.BLOB,
      marketPrice: DataTypes.DECIMAL,
      offeredPrice: DataTypes.DECIMAL,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Advertisement"
    }
  );

  return Advertisement;
};
