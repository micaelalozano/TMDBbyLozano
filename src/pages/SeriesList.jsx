import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import HeroSeries from "../components/HeroSeries";
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

const SeriesList = () => {
    const [series, setSeries] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
  
    const handleChange = (e, page) => {
      setPage(page);
      //window.scroll(0, 0);
    };

    useEffect(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/popular?api_key=376830c4b1497d750fd04c4edae8fe3c&language=en-US&page=${page}`
        )
        .then((data) => {
          setSeries(data.data.results);
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
      <HeroSeries heading="SERIES" />
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

export default SeriesList;
