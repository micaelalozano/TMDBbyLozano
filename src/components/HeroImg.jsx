import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
//Estilos
import white from "../assets/white.jpg";
import "../estilos/heroimg.css";
//Material

const HeroImg = () => {
  const { user_name } = useParams();
  const [user, setUser] = useState([]);
  //const [log, setLog] = useState({});

  console.log(user_name);

  useEffect(() => {
    axios
      .get(`/api/users/${user_name}`)
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, [user_name]);

  console.log("AHORA!", user);

  return (
    <>
      <div className="hero-img">
        <div className="mask-img">
          <img className="white-img" src={white} alt="fondo" />{" "}
        </div>
        <ul>
          <div className="content-heroimg">
            {user.map(function (e, i) {
              return (
                <li key={i}>
                  <div className="left-detalle">
                    <img
                      className="img1"
                      src={
                        e.imagen
                          ? e.imagen
                          : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="right-detalle">
                    <h3 className="mi_cuenta">MI CUENTA</h3>
                    <p className="mis_datos">NOMBRE: {e.name} </p>
                    <p className="mis_datos">APELLIDO: {e.lastname} </p>
                    <p className="mis_datos">CORREO ELECTRONICO: {e.email}</p>
                    <div>
                      <Link to={"/cambiar_foto_perfil/" + e.id}>
                        <button>Cambiar foto de perfil</button>
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </div>
        </ul>
      </div>
    </>
  );
};

export default HeroImg;