import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
//Estilos
import "../estilos/navDos.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoginIcon from "@mui/icons-material/Login";

const Navbar = () => {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState([]);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [clickDos, setClickDos] = useState(false);
  const handleClickDos = () => setClickDos(!clickDos);

  const [clickTres, setClickTres] = useState(false);
  const handleClickTres = () => setClickTres(!clickTres);

  const [click4, setClick4] = useState(false);
  const handleClick4 = () => setClick4(!click4);

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/api/users/${user.username}`)
      .then((res) => res.data)
      .then((user) => {
        setLogged(user);
      });
  }, [user.username]);

  console.log(logged);

  const handleLogout = () => {
    axios
      .post("/api/users/logout")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  };

  console.log(user);

  return (
    <>
      <div className="header-dos">
        <div className="hamburguer" onClick={handleClick}>
          {click ? (
            <FaTimes size={23} style={{ color: "#dc143c" }} />
          ) : (
            <FaBars size={23} style={{ color: "#dc143c" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Link to="/">
            <h1 className="logo">TMDB</h1>
          </Link>
          <li>
            <Link to="/browse">Inicio</Link>
          </li>

          <li onClick={handleClickDos}>
            Películas <span className="material-icons">expand_more</span>
            <ul className={clickDos ? "children-dos" : "sub-menu"}>
              <Link to="/todo_en_peliculas">
                <li className="sub-li-dos">Ver todo</li>
              </Link>
              <Link to="/cartelera">
                <li className="sub-li-dos">En cartelera hoy</li>
              </Link>
              <Link to="/proximamente">
                <li className="sub-li-dos">Proximamente</li>
              </Link>
              <Link to="/mas_valoradas">
                <li className="sub-li-dos">Mas valoradas</li>
              </Link>
            </ul>
          </li>

          <li onClick={handleClickTres}>
            Series <span className="material-icons">expand_more</span>
            <ul className={clickTres ? "children-dos" : "sub-menu"}>
              <Link to="/todo_en_series">
                <li className="sub-li-dos">Ver todo</li>
              </Link>
              <Link to="/en_emision">
                <li className="sub-li-dos">Se emiten hoy</li>
              </Link>
              <Link to="/en_televison">
                <li className="sub-li-dos">En television</li>
              </Link>
              <Link to="/mas_valoradas=series">
                <li className="sub-li-dos">Mas valoradas</li>
              </Link>
            </ul>
          </li>
          <li>
            <Link to="/mas_vistas">Películas mas vistas</Link>
          </li>
        </ul>

        {user.username ? (
          <>
            <ul>
              <div className="nav-login">
                {logged.map(function (e, i) {
                  return (
                    <li key={i}>
                      <Link to="/mis_favoritos">
                        <FavoriteBorderIcon
                          className="nav-icon"
                          sx={{ fontSize: 20 }}
                        />
                      </Link>
                      <img
                        onClick={handleClick4}
                        className="foto-perfil"
                        src={
                          e.imagen
                            ? e.imagen
                            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        }
                        alt="Foto de perfil"
                      />{" "}
                      <ul className={click4 ? "cuenta-menu" : "sub-menu"}>
                        <FaTimes
                          onClick={handleClick4}
                          size={18}
                          style={{ color: "#ffffff" }}
                          className="close-perfil"
                        />
                        <div className="aca">
                          <Link to={"/mi_cuenta/" + user.username}>
                            <li className="sub-perfil">Mi Cuenta</li>
                          </Link>
                          <li className="sub-perfil" onClick={handleLogout}>
                            Cerrar Sesion
                          </li>
                        </div>
                      </ul>
                    </li>
                  );
                })}
              </div>
            </ul>
          </>
        ) : (
          <>
            <div className="nav-login">
              <FavoriteBorderIcon className="nav-icon" sx={{ fontSize: 20 }} />
              <Link to="/login">
                <LoginIcon className="nav-icon" sx={{ fontSize: 20 }} />
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
