import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import NavDos from "../components/NavDos";
import { StarRating } from "baseui/rating";
import { Spinner } from "../components/Spinner";
//Estilos
import "../estilos/detalles.css";

const SeriesDetails = () => {
  const { serie_id } = useParams();
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        ` https://api.themoviedb.org/3/tv/${serie_id}?api_key=376830c4b1497d750fd04c4edae8fe3c&language=en-US`
      )
      .then((res) => res.data)
      .then((pelicula) => {
        setSeries(pelicula);
        setIsLoading(false);
      });
  }, [serie_id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <NavDos />
      <div className="todo-contenedor">
        <div className="card-contenedor">
          <div className="primer-c">
            <img
              className="poster-div"
              src={"https://www.themoviedb.org/t/p/w300" + series.poster_path}
              alt="Movie Poster"
            />
          </div>
          <div className="segundo-c">
            <h2 className="movie-titulo">{series.original_name} </h2>
            <div className="generos">
              <p className="p-data">{series.last_air_date} </p>
              <p className="p-data">{series.number_of_seasons} Temporadas</p>
              <p className="p-data">{series.number_of_episodes} Episodios</p>
            </div>
            <StarRating
              numItems={10}
              size={18}
              value={series.vote_average}
            />
            <p className="overview">{series.overview} </p>
          </div>
        </div>
        <img
          className="fondo-detail"
          src={"https://www.themoviedb.org/t/p/w300" + series.poster_path}
          alt=""
        />
      </div>
    </>
  );
};

export default SeriesDetails;
