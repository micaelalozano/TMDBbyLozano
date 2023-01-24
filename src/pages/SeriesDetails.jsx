import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import NavDos from "../components/NavDos";
//Estilos
import "../estilos/detalles.css";

const SeriesDetails = () => {
  const { serie_id } = useParams();
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios
      .get(
        ` https://api.themoviedb.org/3/tv/${serie_id}?api_key=376830c4b1497d750fd04c4edae8fe3c&language=en-US`
      )
      .then((res) => res.data)
      .then((pelicula) => {
        setSeries(pelicula);
      });
  }, [serie_id]);

  console.log(series);

  return (
    <>
      <NavDos />
       <div className="todo-contenedor">
        <img
          className="fondo-detail"
          src={"https://www.themoviedb.org/t/p/w300" + series.poster_path}
          alt=""
        />
        <div className="detail-contenedor">
          <div className="left-detail">
            <img
              className="poster-left"
              src={"https://www.themoviedb.org/t/p/w300" + series.poster_path}
              alt=""
            />
          </div>
          <div className="right-detail">
            <div className="div-title">
              <h1 className="movie-tit"> {series.original_name} </h1>
            </div>
            <p className="date"> {series.release_date} </p>
            <ul>
              <div className="div-generos">
                {series.genres?.map(function (e, i) {
                  return (
                    <li key={i}>
                      <p className="genero">{e.name}</p>
                    </li>
                  );
                })}
              </div>
            </ul>
            <p className="overview"> {series.overview} </p>
            <p className="vote">
              <span className="material-star">star</span>
              {series.vote_average}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeriesDetails;
