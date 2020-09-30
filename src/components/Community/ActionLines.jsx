import React from 'react'; 
import '../../assets/styles/components/ActionLines.scss'; 
import campaña from "../../assets/static/images/campaña.png";
import bancodealimentos from "../../assets/static/images/bancodealimentos.png";
import escuela from "../../assets/static/images/escuela.png";
import plataformasolidaria from "../../assets/static/images/plataformasolidaria.png";


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

        <div className="container-img-actionLines">
          <img src={campaña} className="alimentos" alt={"campaña"} />
          <p>Campaña solidaria de emergencia</p>
        </div>
        <div>
          <img
            src={bancodealimentos}
            className="alimentos"
            alt={"bancodealimentos"}
          />
          <p>Banco de alimentos</p>
        </div>
        <div>
          <img src={escuela} className="alimentos" alt={"escuela"} />
          <p>Escuela</p>
        </div>
        <div>
          <img
            src={plataformasolidaria}
            className="alimentos"
            alt={"plataformasolidaria"}
          />
          <p>Plataforma solidaria</p>
        </div>
      </div>
    );
}

export default ActionLines; 
