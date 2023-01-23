import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Explorar from "./pages/Explorar";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Micuenta from "./pages/Micuenta";
import Miperfil from "./pages/Miperfil";
import Votadas from "./pages/Votadas";
import MovieLIst from "./pages/MovieLIst";
import Cartelera from "./pages/Cartelera";
import Proximamente from "./pages/Proximamente";
import MasValoradas from "./pages/MasValoradas";
import SeriesList from "./pages/SeriesList";
import Emision from "./pages/Emision";
import EnTv from "./pages/EnTv";
import SeriesMasValoradas from "./pages/SeriesMasValoradas";
import Detalles from "./pages/Detalles";
import SeriesDetails from "./pages/SeriesDetails";
import Search from "./pages/Search";
import Favoritos from "./pages/Favoritos";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("/api/users/ruta/me")
      .then((res) => res.data)
      .then((user) => {
        console.log(user);
        setUser(user);
      });
  }, []);
  console.log("acaa", user);

  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/browse" element={<Explorar />} />
        <Route path="/todo_en_peliculas" element={<MovieLIst />} />
        <Route path="/cartelera" element={<Cartelera />} />
        <Route path="/proximamente" element={<Proximamente />} />
        <Route path="/mas_valoradas" element={<MasValoradas />} />
        <Route path="/mas_vistas" element={<Votadas />} />
        <Route path="/todo_en_series" element={<SeriesList />} />
        <Route path="/en_emision" element={<Emision />} />
        <Route path="/en_televison" element={<EnTv />} />
        <Route path="/mas_valoradas=series" element={<SeriesMasValoradas />} />
        <Route path="/ver_detalle/:movie_id" element={<Detalles />} />
        <Route path="/ver_detalle=series/:serie_id" element={<SeriesDetails />}/>
        <Route path="/ver_detalle=series/:serie_id" element={<SeriesDetails />}/>
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mi_cuenta/:username" element={<Micuenta />} />
        <Route path="/cambiar_foto_perfil/:user_id" element={<Miperfil />} />
        <Route path="/mis_favoritos" element={<Favoritos />} />
      </Routes>
    </>
  );
};

export default App;
