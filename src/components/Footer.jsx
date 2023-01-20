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
          <h4 className="h4">© Micaela Lozano {new Date().getFullYear()}</h4>
        </div>
        <ul className="contenedor-icons">
          <li className="me"> micaelalozano95@gmail.com</li>
          <li className="lis">
            <Link href="https://www.linkedin.com/in/micaela-lozano16/">
              <LinkedInIcon className="link" sx={{ fontSize: 29 }} />
            </Link>
          </li>
          <li className="lis">
            <Link href="https://github.com/micaelalozano">
              <GitHubIcon className="git" sx={{ fontSize: 27 }} />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
