const express = require("express");
const { Favoritos, Users, Movies } = require("../models");
const router = express.Router();

router.post("/", (req, res) => {
    const { movieId, userId } = req.body;
  
    Movies.findOne({
      where: { id: movieId },
      include: { model: Users, where: { id: userId } },
    }).then((data) => {
      if (data === null) {
        Users.findByPk(userId).then((user) => {
          //console.log(user);
          Movies.findByPk(movieId).then((pelicula) => {
            user.addMovies(pelicula);
            res.status(201).send(pelicula);
          });
        });
      } else {
        res.send("listo");
      }
    });
  });
  
  //Buscar todos los favs:
  router.get("/:userId", (req, res) => {
    Movies.findAll({
      include: { model: Users, where: { id: req.params.userId } },
    }).then((data) => {
      res.status(200).send(data);
    });
  });
  
  module.exports = router;
  