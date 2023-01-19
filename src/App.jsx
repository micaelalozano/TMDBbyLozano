import React, { useState,useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import Explorar from "./pages/Explorar";
import Inicio from "./pages/Inicio";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Micuenta from "./pages/Micuenta";
import Tr from "./pages/Tr";

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
        <Route path="/explorar" element={<Explorar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mi_cuenta/:user_name" element={<Micuenta />} />
        <Route path="/cambiar_foto_perfil/:username_id" element={<Tr />} />
      </Routes>
      
    </>
  );
};

export default App;
