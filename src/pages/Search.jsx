import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavDos from "../components/NavDos";
//Estilos
import "../estilos/heroVotadas.css";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const search = useInput();

  function useInput() {
    const [value, setValue] = useState("");

    const onChange = (e) => {
      setValue(e.target.value);
    };
    return { value, onChange };
  }

  //console.log(search.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=376830c4b1497d750fd04c4edae8fe3c&language=en-US&query=${search.value}&page=1&include_adult=false`
      )
      .then((data) => data.data.results)
      .then((movies) => {
        setMovies(movies);
        console.log("esto es", movies);
      });
  };

  return (
    <>
      <NavDos />
      <form className="form-search-dos" onSubmit={handleSubmit}>
            <input
              className="search-input-dos"
              type="search"
              placeholder="Qué quieres ver?"
              {...search}
              autoFocus
            />
            <button className="btn-search-dos">
              <SearchIcon sx={{ fontSize: 20 }} className="search-icon" />
            </button>
          </form>
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

export default Search;
