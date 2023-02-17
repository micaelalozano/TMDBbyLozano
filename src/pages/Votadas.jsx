import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeroVotadas from "../components/HeroVotadas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Spinner } from "../components/Spinner";
//Estilos
import "../estilos/heroVotadas.css";

const Votadas = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=376830c4b1497d750fd04c4edae8fe3c&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      )
      .then((data) => {
        setMovies(data.data.results);
        console.log(data.data.results);
        setIsLoading(false);
      });
  }, []);

  if(isLoading){
    return <Spinner/>
  }

  return (
    <>
      <Navbar />
      <HeroVotadas heading="PELÍCULAS MAS VISTAS" />
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
      <Footer />
    </>
  );
};

export default Votadas;
