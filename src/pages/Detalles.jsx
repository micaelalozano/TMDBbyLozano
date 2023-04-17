import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import NavDos from "../components/NavDos";
import { StarRating } from "baseui/rating";
//Estilos
import "../estilos/detalles.css";

const Detalles = () => {
  const { movie_id } = useParams();
  const [movie, setMovie] = useState([]);

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

  console.log(movie);

  return (
    <>
      <NavDos />
      <div className="todo-contenedor">
        <div className="card-contenedor">
          <div className="primer-c">
            <img
              className="poster-div"
              src={"https://www.themoviedb.org/t/p/w300" + movie.poster_path}
              alt="Movie Poster"
            />
          </div>
          <div className="segundo-c">
            <h2 className="movie-titulo">{movie.original_title} </h2>
            <div className="generos">
              <p className="p-data">{movie.release_date} </p>
              <p className="p-data">{movie.runtime} min</p>
              <p className="p-data">{movie.status} </p>
            </div>
            <StarRating
              numItems={10}
              size={18}
              value={movie.vote_average}
            />
            <p className="overview">{movie.overview} </p>
          </div>
        </div>
        <img
          className="fondo-detail"
          src={"https://www.themoviedb.org/t/p/w300" + movie.poster_path}
          alt=""
        />
      </div>
    </>
  );
};

export default Detalles;
