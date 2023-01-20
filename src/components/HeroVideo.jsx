import React from "react";
import { Link } from "react-router-dom";
//Estilos
import "../estilos/heroVideo.css";
import start from "../assets/start.mp4";

const HeroVideo = () => {
  return (
    <>
      <div className="hero">
        <div className="mask">
          <video className="into-video" src={start} autoPlay loop></video>
        </div>
        <div className="content">
          <h1 className="titulo">Bienvenido</h1>
          <Link to="/browse">
            <button className="btn-explorar">Explorar</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroVideo;