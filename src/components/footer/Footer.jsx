import React, {Fragment} from "react";
import LogoFooter from "./LogoFooter";
import RRSSFooter from "./RRSSFooter";
import '../../assets/styles/components/Footer.scss'; 
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
                <li>Nuestro equipo</li>
                <li>Rendición de cuenta</li>
                <li>Nuestra meta</li>
              </ul>
            </div>
            <div className="col">
              <p className="title-footer">Qué hacemos</p>
              <ul className="list">
                <li>Campaña solidaria de emergencia</li>
                <li>Banco de alimentos</li>
                <li>Escuelas</li>
                <li>Plataforma solidaria</li>
              </ul>
            </div>
            <div className="col">
              <p className="title-footer">Hazte parte</p>
              <ul className="list">
                <li>Almuerzos solidarios</li>
                <li>Sé voluntario</li>
                <li>Huertos urbanos</li>
                <li>Banco de alimentos</li>
                <li>Clases y capacitaciones</li>
              </ul>
            </div>
            <div className="col">
              <p className="title-footer">Novedades</p>
              <ul className="list">
                <li>Testimonios</li>
                <li>Galeria multimedia</li>
                <li>Noticias</li>
              </ul>
            </div>
            <div className="col">
              <p className="title-footer">Contacto</p>
            </div>
            <div className="col-info-questions">
              <p className="title-footer-questions">Preguntas frecuentes</p>
              <ul className="list">
                <li>¿Cómo puedo colaborar?</li>
                <li>Trabaja con nosotros</li>
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
  