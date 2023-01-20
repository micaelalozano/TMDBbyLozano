import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
//Estilos
import "../estilos/heroimg.css";

const HeroImg = () => {
  const { username } = useParams();
  const [user, setUser] = useState([]);

  console.log(username);

  useEffect(() => {
    axios
      .get(`/api/users/${username}`)
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, [username]);

  console.log("VER!", user);

  return (
    <>
      <div className="hero-img">
        <div className="heading">
          <ul>
            <div className="content">
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
                      <p className="mis_datos">NOMBRE DE USUARIO: {e.username} </p>
                      <p className="mis_datos">CORREO ELECTRONICO: {e.email}</p>
                      <div>
                        <Link to={"/cambiar_foto_perfil/" + e.id}>
                          <button className="btn-foto-perfil">Cambiar foto de perfil</button>
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </div>
          </ul>{" "}
        </div>
      </div>
    </>
  );
};

export default HeroImg;

