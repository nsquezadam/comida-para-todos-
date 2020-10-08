import React, { Fragment } from "react";
import LogoFooter from "./LogoFooter";
import RRSSFooter from "./RRSSFooter";
import "../../assets/styles/components/Footer.scss";
//import { Link } from "react-router-dom";
// import LogoFooter from './LogoFooter';

const Footer = () => {
  return (
    <Fragment>
      <div className="fatherFooter">
      <div className="main-footer">
        <LogoFooter />
        <div className="container-footer">
          <div className="row">
            <div className="col">
              <p className="title-footer">Conócenos</p>
              <ul className="list">
                <li>
                  <a href="/" className="links">Sobre nosotros</a>
                </li>
                <li>
                  <a href="/" className="links">Nuestro equipo</a>
                </li>
                <li>
                  <a href="/" className="links">Rendición de cuenta</a>
                </li>
                <li>
                  <a href="/" className="links">Nuestra meta</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <p className="title-footer">Qué hacemos</p>
              <ul className="list">
                <li>
                  <a href="/" className="links">Campaña solidaria de emergencia</a>
                </li>
                <li>
                  <a href="/" className="links">Banco de alimentos</a>
                </li>
                <li>
                  <a href="/" className="links">Escuelas</a>
                </li>
                <li>
                  <a href="/" className="links">Plataforma solidaria</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <p className="title-footer">Hazte parte</p>
              <ul className="list">
                <li>
                  <a href="/" className="links">Almuerzos solidarios</a>
                </li>
                <li>
                  <a href="/" className="links">Sé voluntario</a>
                </li>
                <li>
                  <a href="/" className="links">Huertos urbanos</a>
                </li>
                <li>
                  <a href="/" className="links">Banco de alimentos</a>
                </li>
                <li>
                  <a href="/" className="links">Clases y capacitaciones</a>
                </li>
              </ul>
            </div>
            <div className="col">
              <p className="title-footer">Novedades</p>
              <ul className="list">
                <li>
                  <a href="/" className="links">Testimonios</a>
                </li>
                <li>
                  <a href="/" className="links">Galeria multimedia</a>
                </li>
                <li>
                  <a href="/" className="links">Noticias</a>
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
                  <a href="/" className="links">¿Cómo puedo colaborar?</a>
                </li>
                <li>
                  <a href="/" className="links">Trabaja con nosotros</a>
                </li>
              </ul>
            </div>
          </div>
         
        </div>
        
      </div>
      <div className="RRSS-footer">
        <RRSSFooter />
      </div>
          <div className="develop">
            <p className="col-info">
              @ Comida para todos, 2020. Desarrollado por Baspe, Blanco, Marquez
              y Quezada.
            </p>
          </div>
          </div>
     
    </Fragment>
  );
};

export default Footer;
