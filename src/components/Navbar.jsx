import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
//Estilos
import "../estilos/navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";

const Navbar = () => {
  const [user, setUser] = useState({});
  const [logged, setLogged] = useState([]);
  const navigate = useNavigate();

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
      .get(
        "https://tmdb-bylozano.onrender.com/api/users/ruta/perfil",
        {
          withCredentials: true,
          credentials: "include",
        },
        {
          headers: {
            "Access-Control-Allow-Origin":
              "https://tmdb-by-micaelalozano.vercel.app/",
          },
        }
      )
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://tmdb-bylozano.onrender.com/api/users/${user.username}`,
        {
          withCredentials: true,
          credentials: "include",
        },
        {
          headers: {
            "Access-Control-Allow-Origin":
              "https://tmdb-by-micaelalozano.vercel.app/",
          },
        }
      )
      .then((res) => res.data)
      .then((user) => {
        setLogged(user);
      });
  }, [user.username]);

  console.log(logged);

  const handleLogout = () => {
    axios
      .post(
        "https://tmdb-bylozano.onrender.com/api/users/logout",
        {
          withCredentials: true,
          credentials: "include",
        },
        {
          headers: {
            "Access-Control-Allow-Origin":
              "https://tmdb-by-micaelalozano.vercel.app/",
          },
        }
      )
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
        navigate("/browse");
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
            <Link to="/browse">Inicio</Link>
          </li>

          <li onClick={handleClickDos}>
            Películas
            {clickDos ? (
              <span className="material-icons">expand_less</span>
            ) : (
              <>
                <span className="material-icons">expand_more</span>
              </>
            )}
            <ul className={clickDos ? "children" : "sub-menu"}>
              <Link to="/todo_en_peliculas">
                <li className="sub-li">Ver todo</li>
              </Link>
              <Link to="/cartelera">
                <li className="sub-li">En cartelera hoy</li>
              </Link>
              <Link to="/proximamente">
                <li className="sub-li">Proximamente</li>
              </Link>
              <Link to="/mas_valoradas">
                <li className="sub-li">Mas valoradas</li>
              </Link>
            </ul>
          </li>

          <li onClick={handleClickTres}>
            Series
            {clickTres ? (
              <span className="material-icons">expand_less</span>
            ) : (
              <>
                <span className="material-icons">expand_more</span>
              </>
            )}
            <ul className={clickTres ? "children" : "sub-menu"}>
              <Link to="/todo_en_series">
                <li className="sub-li">Ver todo</li>
              </Link>
              <Link to="/en_emision">
                <li className="sub-li">Se emiten hoy</li>
              </Link>
              <Link to="/en_televison">
                <li className="sub-li">En television</li>
              </Link>
              <Link to="/mas_valoradas=series">
                <li className="sub-li">Mas valoradas</li>
              </Link>
            </ul>
          </li>
          <li>
            <Link to="/mas_vistas">Películas más vistas</Link>
          </li>
        </ul>

        {user.username ? (
          <>
            <ul>
              <div className="nav-login">
                {logged.map(function (e, i) {
                  return (
                    <li key={i}>
                      <Link to="/search">
                        <SearchIcon
                          className="nav-icon"
                          sx={{ fontSize: 21 }}
                        />
                      </Link>
                      <img
                        onClick={handleClick4}
                        className="foto-perfil"
                        src={
                          e.imagen
                            ? e.imagen
                            : "https://www.softzone.es/app/uploads-softzone.es/2018/04/guest.png"
                        }
                        alt="Foto de perfil"
                      />
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
              <Link to="/search">
                <SearchIcon className="nav-icon" sx={{ fontSize: 21 }} />
              </Link>
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
