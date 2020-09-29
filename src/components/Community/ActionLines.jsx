import React from 'react'; 
import '../../assets/styles/components/ActionLines.scss'; 
import alimentos from "../../assets/static/Pics/alimentos.jpg";



const ActionLines = () => {
    return (
      <div className="container-5">
        <div className="background">
          <div className="title-1">
            <h2>Qué hacemos</h2>
          </div>
          <div className="content-text">
            <h4>
              Nuestras líneas de acción están enfocadas en la Seguridad
              Alimentaria como un derecho primordial de toda la ciudadanía en su
              conjunto.
            </h4>
          </div>
        </div>

        <div className="container-img">
          <img src={alimentos} className="alimentos" alt={"alimentos"} />
          <p>Campaña solidaria de emergencia</p>
        </div>
        <div>
          <img src={alimentos} className="alimentos" alt={"alimentos"} />
          <p>Banco de alimentos</p>
        </div>
        <div>
          <img src={alimentos} className="alimentos" alt={"alimentos"} />
          <p>Escuela</p>
        </div>
        <div>
          <img src={alimentos} className="alimentos" alt={"alimentos"} />
          <p>Plataforma solidaria</p>
        </div>
      </div>
    );
}

export default ActionLines; 
