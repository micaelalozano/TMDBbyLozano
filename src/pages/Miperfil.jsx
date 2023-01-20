import React, { useState,useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
//Estilos
import "../estilos/miPerfil.css";

const Miperfil = () => {
  const { user_id } = useParams();
  const navigate = useNavigate();
  const [logged, setLogged] = useState("");
  const [imagen, setImagen] = useState("");

  console.log(user_id);

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setLogged(user);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/users/${user_id}`, { imagen }, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        navigate("/mi_cuenta/" + logged.username);
      })
      .catch((err) => {
        window.alert("ERROR");
      });
  };

  //user por id

  return (
    <>
      <div className="mi-fotoperfil">
        <div className="content-perfil">
          <form method="post" onSubmit={handleSubmit}>
            <div className="input-imagen">
              <p className="cambiar-foto">CAMBIAR FOTO DE PERFIL</p>
              <div className="input-url">
                <input
                  className="item-1"
                  type="text"
                  name="nombre"
                  id="nombre"
                  placeholder="Pegar URL de la imagen aqui"
                  onChange={(e) => setImagen(e.target.value)}
                  value={imagen}
                />
              </div>
              <Link>
              <button className="btn-aceptar" onClick={handleSubmit}>ACEPTAR</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Miperfil;
