import React, { Component } from "react";
//Estilos
import "../estilos/heroVotadas.css";
import PTserie from "../assets/PTserie.jpg";

class HeroSeries extends Component {
    render() {
      return (
        <>
          <div className="hero-votadas">
            <div className="mask-votadas">
              <img className="poster-votadas" src={PTserie} alt="posters" />
              <div className="content-vot">
                <h1 className="titulo-vot">{this.props.heading}</h1>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
export default HeroSeries;
