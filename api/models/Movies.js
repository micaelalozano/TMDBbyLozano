const Sequelize = require("sequelize");
const db = require("../db");

class Movies extends Sequelize.Model {}

Movies.init(
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
  { sequelize: db, modelName: "movies" }
);

module.exports = Movies;
