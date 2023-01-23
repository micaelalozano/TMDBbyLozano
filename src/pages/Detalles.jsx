import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import NavDos from "../components/NavDos";
//Estilos
import "../estilos/detalles.css";

const Detalles = () => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState([]);
  const [user, setUser] = useState("");
  const [logged, setLogged] = useState("");
  const [isFavorito, setIsFavorito] = useState([]);

  //use log

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

//

useEffect(() => {
  axios
    .get(`/api/users/${user.username}`)
    .then((res) => res.data)
    .then((user) => {
      setLogged(user);
    });
}, [user.username]);

console.log(logged);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=376830c4b1497d750fd04c4edae8fe3c&language=en-US`
      )
      .then((res) => res.data)
      .then((pelicula) => {
        setMovie(pelicula);
      });
  }, [movie_id]);

  //Agregar a favoritos:
  const addFav = (movieId) => {
    if (!user.name) {
      window.alert("Necesitas loguearte");
      return;
    }
    axios
      .post("/api/favoritos", {
        movieId: movieId,
        userId: logged.id,
      })
      .then(() => {
        window.alert("Agregado a Favs!");
        return axios.get(`/api/favoritos/${logged.id}`);
      })
      .then((res) => res.data)
      .then((data) => setIsFavorito(data))
      .catch(() => alert("Se ha producido un error"));
  };
console.log(logged.id);
  console.log(movie);

  return (
    <>
      <NavDos />
      <div className="todo-contenedor">
        <img
          className="fondo-detail"
          src={"https://www.themoviedb.org/t/p/w300" + movie.poster_path}
          alt=""
        />
        <div className="detail-contenedor">
          <div className="left-detail">
            <img
              className="poster-left"
              src={"https://www.themoviedb.org/t/p/w300" + movie.poster_path}
              alt=""
            />
          </div>
          <div className="right-detail">
            <div className="div-title">
              <h1 className="movie-tit"> {movie.title} </h1>
              <span className="material-fav" onClick={() => addFav(movie.id)}>
                favorite
              </span>
            </div>
            <p className="date"> {movie.release_date} </p>
            <ul>
              <div className="div-generos">
                {movie.genres?.map(function (e, i) {
                  return (
                    <li key={i}>
                      <p className="genero">{e.name}</p>
                    </li>
                  );
                })}
              </div>
            </ul>
            <p className="overview"> {movie.overview} </p>
            <p className="vote">
              <span className="material-star">star</span>
              {movie.vote_average}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalles;
