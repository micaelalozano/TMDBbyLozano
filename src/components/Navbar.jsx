import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
//Estilos
import "../estilos/navbar.css";
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

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

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
      .get(`/api/users/${username.name}`)
      .then((res) => res.data)
      .then((user) => {
        setLogged(user);
      });
  }, [username.name]);

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
      <div className={color ? "header header-bg" : "header"}>
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
            <Link to="/">Inicio</Link>
          </li>

          <li onClick={handleClickDos}>
            Peliculas <span className="material-icons">expand_more</span>
            <ul className={clickDos ? "children" : "sub-menu"}>
              <Link to="/productos">
                <li className="sub-li">Ver todo</li>
              </Link>
              <Link to="/accion">
                <li className="sub-li">Accion</li>
              </Link>
              <Link to="/sweaters">
                <li className="sub-li">Comedias</li>
              </Link>
              <Link to="/pantalones">
                <li className="sub-li">Dramas</li>
              </Link>
              <Link to="/vestidos">
                <li className="sub-li">Terror</li>
              </Link>
            </ul>
          </li>

          <li onClick={handleClickTres}>
            Series <span className="material-icons">expand_more</span>
            <ul className={clickTres ? "children" : "sub-menu"}>
              <Link to="/productos">
                <li className="sub-li">Ver todo</li>
              </Link>
              <Link to="/accion">
                <li className="sub-li">Accion</li>
              </Link>
              <Link to="/sweaters">
                <li className="sub-li">Comedias</li>
              </Link>
              <Link to="/pantalones">
                <li className="sub-li">Dramas</li>
              </Link>
              <Link to="/vestidos">
                <li className="sub-li">Terror</li>
              </Link>
            </ul>
          </li>
          <li>
            <Link to="/contacto">Mejor votadas</Link>
          </li>
        </ul>

        {user.name ? (
          <>
            <ul>
              <div className="nav-login">
                {logged.map(function (e, i) {
                  return (
                    <li key={i}>
                      <FavoriteBorderIcon
                        className="nav-icon"
                        sx={{ fontSize: 20 }}
                      />
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
