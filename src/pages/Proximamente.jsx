import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeroVotadas from "../components/HeroVotadas";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Spinner } from "../components/Spinner";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
//Estilos
import "../estilos/heroVotadas.css";

let theme = createTheme({
  palette: {
    primary: {
      main: red[900],
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

const Proximamente = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (e, page) => {
    setPage(page);
    //window.scroll(0, 0);
  };

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=376830c4b1497d750fd04c4edae8fe3c&language=en-US&page=${page}`
      )
      .then((data) => {
        setMovies(data.data.results);
        console.log(data.data.results);
        setIsLoading(false);
      });
  }, [page]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <HeroVotadas heading="PROXIMAMENTE" />
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
      <ThemeProvider theme={theme}>
        <Pagination
          count={100}
          siblingCount={0}
          boundaryCount={2}
          page={page}
          sx={{ button: { color: "#4d4a4a" } }}
          variant="outlined"
          color="primary"
          onChange={handleChange}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1.5em",
          }}
        />
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default Proximamente;
