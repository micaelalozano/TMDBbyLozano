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
              src={"https://www.themoviedb.org/t/p/w300" + movie.poster_path}
              alt=""
            />
          </div>
          <div className="right-detail">
              <p>hola</p>
              <p>hola</p>
              <p>hola</p>
              <p>hola</p>
              <p>hola</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalles;
