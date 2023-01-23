const Sequelize = require("sequelize");
const db = require("../db");

class Favoritos extends Sequelize.Model {}

Favoritos.init(
  {
    original_title: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    poster_path: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "favoritos" }
);

module.exports = Favoritos;