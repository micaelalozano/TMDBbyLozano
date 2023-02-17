import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import HeroVideo2 from "../components/HeroVideo2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//Estilos
import "../estilos/explorar.css";
import { Spinner } from "../components/Spinner";

//API KEY : 376830c4b1497d750fd04c4edae8fe3c

const Explorar = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=376830c4b1497d750fd04c4edae8fe3c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
      )
      .then((data) => {
        setMovies((prevMovies) => prevMovies.concat(data.data.results));
        console.log(data.data.results);
        setHasMore(data.data.page < data.data.total_pages);
        setIsLoading(false)
      });
  }, [page]);

  return (
    <>
      <Navbar />
      <HeroVideo2 />
      <InfiniteScroll
        dataLength={movies.length}
        hasMore={hasMore}
        next={() => setPage((prevPage) => prevPage + 1)}
        loader={<Spinner/>}
      >
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
      </InfiniteScroll>
      <Footer />
    </>
  );
};

export default Explorar;
