import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeroVotadas from "../components/HeroVotadas";
import Navbar from "../components/Navbar";
//Estilos
import "../estilos/heroVotadas.css";
const MasValoradas = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=376830c4b1497d750fd04c4edae8fe3c&language=en-US&page=1"
      )
      .then((data) => {
        setMovies(data.data.results);
        console.log(data.data.results);
      });
  }, []);

  return (
    <>
      <Navbar />
      <HeroVotadas heading="MAS VALORADAS" />
      <ul>
        <div className="card-container-vot">
          {movies.map(function (e, i) {
            return (
              <li key={i}>
                <Link to={"/ver_detalle/" + e.id}>
                  <div className="card">
                    <img
                      className="img-card"
                      src={
                        "https://www.themoviedb.org/t/p/w300" + e.poster_path
                      }
                      alt="Poster Pelicula"
                    />
                    <p className="movievot-title"> {e.original_title} </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
};

export default MasValoradas;
