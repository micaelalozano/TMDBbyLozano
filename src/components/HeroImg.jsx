import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { Spinner } from "./Spinner";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';//Estilos
import "../estilos/heroimg.css";

const HeroImg = () => {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(username);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`/api/users/${username}`)
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
        setIsLoading(false);
      });
  }, [username]);

  if (isLoading) {
    return <Spinner />;
  }

  console.log("VER!", user);

  return (
    <>
      <ul>
        {user.map(function (e, i) {
          return (
            <div className="hero-img">
              <li key={i} className="contenedor-general">
                <div className="profile-pic">
                  <Link to={"/cambiar_foto_perfil/" + e.id}>
                    <button className="change-pic">
                      <AddPhotoAlternateOutlinedIcon sx={{ fontSize: 18 }} />
                    </button>
                  </Link>

                  <img src={e.imagen} alt="Foto de perfil" className="pic" />
                </div>
                <div className="profile-data">
                  <h2 className="mi_cuenta">MI CUENTA</h2>
                  <p className="mis_datos">NOMBRE: {e.name} </p>
                  <p className="mis_datos">APELLIDO: {e.lastname} </p>
                  <p className="mis_datos">NOMBRE DE USUARIO: {e.username} </p>
                  <p className="mis_datos">CORREO ELECTRONICO: {e.email}</p>
                </div>
              </li>
              <img className="fondo-detail" src={e.imagen} alt="Fondo" />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default HeroImg;

/* {

<div className="left-detalle">
                      <img
                        className="img1"
                        src={
                          e.imagen
                            ? e.imagen
                            : "https://thinktecno.com/wp-content/uploads/2022/06/Como-quitar-la-foto-de-perfil-en-Facebook-sin-borrar.png"
                        }
                        alt=""
                      />
                    </div>
                    <div className="right-detalle">
                      <h3 className="mi_cuenta">MI CUENTA</h3>
                      <p className="mis_datos">NOMBRE: {e.name} </p>
                      <p className="mis_datos">APELLIDO: {e.lastname} </p>
                      <p className="mis_datos">
                        NOMBRE DE USUARIO: {e.username}{" "}
                      </p>
                      <p className="mis_datos">CORREO ELECTRONICO: {e.email}</p>
                      <div>
                        <Link to={"/cambiar_foto_perfil/" + e.id}>
                          <button className="btn-foto-perfil">
                            Cambiar foto de perfil
                          </button>
                        </Link>
                      </div>
                    </div>

} */
