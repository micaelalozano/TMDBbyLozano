const Users = require("./Users");
const Favoritos = require("./Favoritos");
const Movies = require("./Movies");

Users.belongsToMany(Movies,{through: "favorite_user"})
Movies.belongsToMany(Users,{through: "favorite_user"})

module.exports = { Users, Favoritos, Movies };
