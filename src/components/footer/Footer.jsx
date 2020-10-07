import React, { Fragment } from "react";
import LogoFooter from "./LogoFooter";
import RRSSFooter from "./RRSSFooter";
import "../../assets/styles/components/Footer.scss";
import { Link } from "react-router-dom";
// import LogoFooter from './LogoFooter';

const Footer = () => {
  return (
    <Fragment>
      <div className="main-footer">
        <LogoFooter />
        <div className="container-footer">
          <div className="row">
            <div className="col">
              <p className="title-footer">Conócenos</p>
              <ul className="list">
                <li>
                  <Link className="links">Sobre nosotros</Link>
                </li>
                <li>
                  <Link className="links">Nuestro equipo</Link>
                </li>
                <li>
                  <Link className="links">Rendición de cuenta</Link>
                </li>
                <li>
                  <Link className="links">Nuestra meta</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <p className="title-footer">Qué hacemos</p>
              <ul className="list">
                <li>
                  <Link className="links">Campaña solidaria de emergencia</Link>
                </li>
                <li>
                  <Link className="links">Banco de alimentos</Link>
                </li>
                <li>
                  <Link className="links">Escuelas</Link>
                </li>
                <li>
                  <Link className="links">Plataforma solidaria</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <p className="title-footer">Hazte parte</p>
              <ul className="list">
                <li>
                  <Link className="links">Almuerzos solidarios</Link>
                </li>
                <li>
                  <Link className="links">Sé voluntario</Link>
                </li>
                <li>
                  <Link className="links">Huertos urbanos</Link>
                </li>
                <li>
                  <Link className="links">Banco de alimentos</Link>
                </li>
                <li>
                  <Link className="links">Clases y capacitaciones</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <p className="title-footer">Novedades</p>
              <ul className="list">
                <li>
                  <Link className="links">Testimonios</Link>
                </li>
                <li>
                  <Link className="links">Galeria multimedia</Link>
                </li>
                <li>
                  <Link className="links">Noticias</Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <p className="title-footer">Contacto</p>
            </div>
            <div className="col-info-questions">
              <p className="title-footer-questions">Preguntas frecuentes</p>
              <ul className="list">
                <li>
                  <Link className="links">¿Cómo puedo colaborar?</Link>
                </li>
                <li>
                  <Link className="links">Trabaja con nosotros</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="develop">
            <p className="col-info">
              @ Comida para todos, 2020. Desarrollado por Baspe, Blanco, Marquez
              y Quezada.
            </p>
          </div>
        </div>
      </div>

      <div className="RRSS-footer">
        <RRSSFooter />
      </div>
    </Fragment>
  );
};

export default Footer;
