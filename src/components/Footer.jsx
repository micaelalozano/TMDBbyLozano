import React from "react";
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
            <a href="https://www.linkedin.com/in/micaela-lozano16/">
              <LinkedInIcon className="link" sx={{ fontSize: 28 }} />
            </a>
          </li>
          <li className="li">
            <a href="https://github.com/micaelalozano">
              <GitHubIcon className="git"/>
            </a>
          </li>
        </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
