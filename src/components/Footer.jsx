import React from "react";
import { Link } from "react-router-dom";
//Estilos
import "../estilos/footer.css";
//Iconos
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <div className="cont-footer">
        <div>
          <h4 className="h4-name">© Micaela Lozano {new Date().getFullYear()}</h4>
        </div>
        <div className="div-mail">
        <p className="me"> micaelalozano95@gmail.com</p>
        <ul className="contenedor-icons">
          <li className="li">
            <Link href="https://www.linkedin.com/in/micaela-lozano16/">
              <LinkedInIcon className="link" sx={{ fontSize: 28 }} />
            </Link>
          </li>
          <li className="li">
            <Link href="https://github.com/micaelalozano">
              <GitHubIcon className="git"/>
            </Link>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
