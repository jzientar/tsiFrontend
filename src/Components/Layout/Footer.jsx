import React from "react";
import { NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGooglePlus } from "react-icons/fa";
import logo from "../Layout/Images/car-spare-parts-vector.png";
import Container from "@material-ui/core/Container";
const Footer = () => (
  <footer
    className="font-small pt-5 mt-0"
    style={{ backgroundColor: "#1c1b1b" }}
  >
    <div className="container text-center text-md-left mt-5">
      <div className="row mt-3 dark-grey-text">
        <div className="mx-auto">
          <img
            src={logo}
            width="80"
            height="80"
            style={{ display: "flex", marginLeft: "auto" }}
            alt="logo"
          />
        </div>
        <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
          <h6
            className="text-uppercase font-weight-bold"
            style={{ color: "#ebede6" }}
          >
            CENTROPARTS
          </h6>
          <hr
            className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
            style={{ width: "100px", borderColor: "#2c2c30" }}
          />
          <p style={{ color: "#ebede6" }}>
            Encuentra todas las partes para tu vehiculo y mucho mas en
            CentroParts.
          </p>
          <p style={{ color: "#ebede6" }}>Horario de atencion al cliente.</p>
          <p style={{ color: "#ebede6" }}>De Lunes a Sabado</p>
          <p style={{ color: "#ebede6" }}>09:00 a 12:30 / 14:00 a 18:00</p>
        </div>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6
            className="text-uppercase font-weight-bold"
            style={{ color: "#ebede6" }}
          >
            Enlaces importantes
          </h6>
          <hr
            className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
            style={{ width: "100px", borderColor: "#2c2c30" }}
          />
          <p>
            <NavLink className="nav-link" style={{ color: "#ebede6" }} to="/">
              Inicio
            </NavLink>
          </p>
          <p>
            <NavLink
              className="nav-link"
              style={{ color: "#ebede6" }}
              to="/Nosotros"
            >
              Nosotros
            </NavLink>
          </p>
          <p>
            <NavLink
              className="nav-link"
              style={{ color: "#ebede6" }}
              to="/Categoria"
            >
              Repuestos
            </NavLink>
          </p>
          <p>
            <NavLink
              className="nav-link"
              style={{ color: "#ebede6" }}
              to="/Contactanos"
            >
              Contactanos
            </NavLink>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6
            className="text-uppercase font-weight-bold"
            style={{ color: "#ebede6" }}
          >
            Marcas con las que trabajamos
          </h6>
          <hr
            className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
            style={{ width: "100px", borderColor: "#2c2c30" }}
          />
          <p>
            <a
              className="nav-link"
              target="_blank"
              style={{ color: "#ebede6" }}
              href="https://www.boschautoparts.com/en/"
              rel="noopener noreferrer"
            >
              Bosh
            </a>
          </p>
          <p>
            <a
              className="nav-link"
              target="_blank"
              style={{ color: "#ebede6" }}
              href="https://www.timken.com/es/"
              rel="noopener noreferrer"
            >
              Timkem
            </a>
          </p>
          <p>
            <a
              className="nav-link"
              target="_blank"
              style={{ color: "#ebede6" }}
              href="https://www.skf.com/group"
              rel="noopener noreferrer"
            >
              SKF
            </a>
          </p>
          <p>
            <a
              className="nav-link"
              target="_blank"
              style={{ color: "#ebede6" }}
              href="https://www.fras-le.com/ar-uy/"
              rel="noopener noreferrer"
            >
              Frasle
            </a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6
            className="text-uppercase font-weight-bold"
            style={{ color: "#ebede6" }}
          >
            Contactanos
          </h6>
          <hr
            className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto"
            style={{ width: "100px", borderColor: "#2c2c30" }}
          />
          <p style={{ color: "#ebede6" }}>
            <i className="fas fa-home mr-3"></i> Sacaba, Cochabamba
          </p>
          <p style={{ color: "#ebede6" }}>
            <i className="fas fa-envelope mr-3"></i> centroparts@partsbol.com
          </p>
          <p style={{ color: "#ebede6" }}>
            <i className="fas fa-phone mr-3"></i> + 591 77968874
          </p>
          <p style={{ color: "#ebede6" }}>
            <i className="fas fa-print mr-3"></i> + 01 234 567 89
          </p>
        </div>
      </div>
    </div>
    <hr style={{ borderColor: "#404040" }} />
    <Container maxWidth="md" style={{ background: "#262626" }}>
      <div className=" py-4 d-flex align-items-center ">
        <div className="col-md-4 col-lg-8 text-center text-md-right justify-content-center">
          <a
            className="btn-floating btn-fb mx-3"
            target="_blank"
            href="https://www.facebook.com/"
            rel="noopener noreferrer"
            style={{ color: "#3b5998" }}
          >
            <FaFacebook size={30} />
          </a>
          <a
            className="btn-floating btn-tw mx-3"
            target="_blank"
            href="https://twitter.com/?lang=es"
            rel="noopener noreferrer"
            style={{ color: "#00ACEE" }}
          >
            <FaTwitter size={30} />
          </a>
          <a
            className="btn-floating btn-goo mx-3"
            target="_blank"
            href="https://myaccount.google.com/"
            rel="noopener noreferrer"
            style={{ color: "#db3236" }}
          >
            <FaGooglePlus size={30} />
          </a>
          <a
            className="btn-floating btn-ins mx-3"
            target="_blank"
            href="https://www.instagram.com/?hl=es-la"
            rel="noopener noreferrer"
            style={{ color: "#515BD4" }}
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </div>
    </Container>
    <div className="footer-copyright text-center text-white-50 py-3 ">
      © 2020 Copyright
    </div>
  </footer>
);

export default Footer;
