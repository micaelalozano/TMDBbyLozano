import React, { Component } from "react";
//Estilos
import "../estilos/heroVotadas.css";
import poster from "../assets/Posters.jpg";

class HeroVotadas extends Component {
  render() {
    return (
      <>
        <div className="hero-votadas">
          <div className="mask-votadas">
            <img className="poster-votadas" src={poster} alt="posters" />
            <div className="content-vot">
              <h1 className="titulo-vot">{this.props.heading}</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HeroVotadas;
