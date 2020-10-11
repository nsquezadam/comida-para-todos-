import React, { Fragment } from "react";
import cajas from "../../assets/static/images/imgFoodBank/IconFoodBank/cajas.png";
import familia from "../../assets/static/images/imgFoodBank/IconFoodBank/familia.png";
import formulariocontacto from "../../assets/static/images/imgFoodBank/IconFoodBank/formulariocontacto.png";
import listaverificacion from "../../assets/static/images/imgFoodBank/IconFoodBank/listaverificacion.png";
import tiempoentrega from "../../assets/static/images/imgFoodBank/IconFoodBank/tiempoentrega.png";
import transportando from "../../assets/static/images/imgFoodBank/IconFoodBank/transportando.png";
import '../../assets/styles/Detail.scss'
import '../../assets/styles/components/StepsForm.scss'

function Steps() {
  return (
    <Fragment>
      <div className="containerDetails">
        <div className="Textsteps">
          <p>Sigue estos 6 pasos, para poder colaborar.</p>
        </div>
        
        <div className="containerBoxDetails">

          <div className="boxContainerDetail">
            <div className="container1">
              <img src={listaverificacion} className="imgDetail" alt={"Imagen"} />
            </div>
            <ul>
              <p>Haz una lista de los alimentos con los que deseas colaborar, que sean no perecederos o congelados.</p>
            </ul>
          </div>

          <div className="boxContainerDetail">
            <div className="container1">
              <img src={formulariocontacto} className="imgDetail" alt={"Imagen"} />
            </div>
            <ul>
              <p>Rellena con tus datos el formulario a continuación y envíalo a través del botón “colabora”.</p>
            </ul>
          </div>

          <div className="boxContainerDetail">
            <div className="container1">
              <img src={tiempoentrega} className="imgDetail" alt={"Imagen"} />
            </div>
            <ul>
              <p>Nos comunicaremos contigo, por medio de correo electrónico o llamada telefónica, para coordinar la entrega de alimentos.</p>
            </ul>
          </div>

          <div className="boxContainerDetail">
            <div className="container1">
              <img src={cajas} className="imgDetail" alt={"Imagen"} />
            </div>
            <ul>
              <p>En cajas guarda los alimentos con los que vas a colaborar, para facilitar su traslado.</p>
            </ul>
          </div>

          <div className="boxContainerDetail">
            <div className="container1">
              <img src={transportando} className="imgDetail" alt={"Imagen"} />
            </div>
            <ul>
              <p>Trasládalos  hasta nuestras áreas de distribución, si no nosotros haremos el traslado de los alimentos.</p>
            </ul>
          </div>

          <div className="boxContainerDetail">
            <div className="container1">
              <img src={familia} className="imgDetail" alt={"Imagen"} />
            </div>
            <ul>
              <p>Finalmente, haremos llegar los alimentos a los restaurantes, quienes cocinarán ricos almuerzos a las comunidades vulnerables.</p>
            </ul>
          </div>
          </div>
          </div>
    </Fragment>
  );
}
export default Steps