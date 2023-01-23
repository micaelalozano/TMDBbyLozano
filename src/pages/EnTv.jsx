import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeroSeries from "../components/HeroSeries";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//Estilos
import "../estilos/heroVotadas.css";

const EnTv = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/popular?api_key=376830c4b1497d750fd04c4edae8fe3c&language=en-US&page=3"
      )
      .then((data) => {
        setSeries(data.data.results);
        console.log(data.data.results);
      });
  }, []);

  return (
    <>
      <Navbar />
      <HeroSeries heading="EN TELEVISIÓN" />
      <ul>
        <div className="card-container-vot">
          {series.map(function (e, i) {
            return (
              <li key={i}>
                <Link to={"/ver_detalle=series/" + e.id}>
                  <div className="card">
                    <img
                      className="img-card"
                      src={
                        "https://www.themoviedb.org/t/p/w300" + e.poster_path
                      }
                      alt="Poster Pelicula"
                    />
                    <p className="movievot-title"> {e.name} </p>
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

export default EnTv;
