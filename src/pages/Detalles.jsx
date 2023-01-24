import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import NavDos from "../components/NavDos";
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
