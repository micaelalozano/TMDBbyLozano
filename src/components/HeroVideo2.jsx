import React from "react";
//import { Link } from "react-router-dom";
//Estilos
import "../estilos/heroVideo2.css";
import elvis from "../assets/elvis.mp4";
import SearchIcon from "@mui/icons-material/Search";

const HeroVideo2 = () => {
  return (
    <>
      <div className="hero-dos">
        <div className="mask-dos">
          <video className="into-video" src={elvis} autoPlay loop></video>
        </div>
        <div className="content-dos">
          <h1 className="movie">ELVIS</h1>
          <p className="movie-desc">
            La historia de Elvis se cuenta desde la óptica de su complicada
            relación con su enigmático representante,el coronel Tom Parker.
          </p>
          <form className="form-search" action="">
            <input
              className="search-input"
              type="text"
              placeholder="Qué quieres ver?"
            />
            <button className="btn-search">
              <SearchIcon sx={{ fontSize: 20 }} className="search-icon" />
            </button>
          </form>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default HeroVideo2;