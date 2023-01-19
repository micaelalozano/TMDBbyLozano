import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeroVideo2 from "../components/HeroVideo2";
import Navbar from "../components/Navbar";
//Estilos
import "../estilos/explorar.css";

//API KEY : 376830c4b1497d750fd04c4edae8fe3c

const Explorar = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        " https://api.themoviedb.org/3/discover/movie?api_key=376830c4b1497d750fd04c4edae8fe3c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      )
      .then((data) => {
        setMovies(data.data.results);
        console.log(data.data.results);
      });
  }, []);

  return (
    <>
      <Navbar />
      <HeroVideo2 />
      <ul>
        <div className="card-container">
          {movies.map(function (e, i) {
            return (
              <li key={i}>
                <Link to={"/movie_detalle/" + e.id}>
                  <div className="card">
                    <img
                      className="img-card"
                      src={
                        "https://www.themoviedb.org/t/p/w300" + e.poster_path
                      }
                      alt="Poster Pelicula"
                    />
                    <p className="movie-title"> {e.original_title} </p>
                  </div>{" "}
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
};

export default Explorar;
