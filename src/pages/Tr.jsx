import React, { useState } from "react";
import { useParams } from "react-router";
//import { useNavigate } from "react-router";
//import { Link } from "react-router-dom";
import axios from "axios";

const Tr = () => {
  const { username_id } = useParams();
  const [imagen, setImagen] = useState("");

  console.log(username_id);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/users/${username_id}`, { imagen }, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        window.alert("Actualizado con exito!");
      })
      .catch((err) => {
        window.alert("ERROR");
      });
  };

  //user por id

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <div className="input-imagen">
          <p>CAMBIAR FOTO DE PERFIL</p>
          <div>
            <input
              className="item-1"
              type="text"
              name="nombre"
              id="nombre"
              placeholder="URL imagen"
              onChange={(e) => setImagen(e.target.value)}
              value={imagen}
            />
          </div>
            <button>Cambiar foto</button>
        </div>
      </form>
    </>
  );
};

export default Tr;
