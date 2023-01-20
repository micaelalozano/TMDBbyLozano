import React, { useState,useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Explorar from "./pages/Explorar";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Micuenta from "./pages/Micuenta";
import Miperfil from "./pages/Miperfil";

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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mi_cuenta/:username" element={<Micuenta />} />
        <Route path="/cambiar_foto_perfil/:user_id" element={<Miperfil />} />
      </Routes>
      
    </>
  );
};

export default App;
