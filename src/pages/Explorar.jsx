import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeroVideo2 from "../components/HeroVideo2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Spinner } from "../components/Spinner";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
//Estilos
import "../estilos/explorar.css";

//API KEY : 376830c4b1497d750fd04c4edae8fe3c

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

const Explorar = () => {
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
        `https://api.themoviedb.org/3/discover/movie?api_key=376830c4b1497d750fd04c4edae8fe3c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      )
      .then((data) => {
        setMovies(data.data.results);
        console.log(data.data.results);
        //setHasMore(data.data.page < data.data.total_pages);
        setIsLoading(false);
      });
  }, [page]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <HeroVideo2 />
      <ul>
        <div className="card-container">
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
                    <p className="movie-title"> {e.original_title} </p>
                  </div>{" "}
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
            marginBottom: "2em",
          }}
        />
      </ThemeProvider>
      <Footer />
    </>
  );
};

export default Explorar;
