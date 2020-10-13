import React, { Fragment } from "react";
import Imagen1 from "../Detail/IconDetail/Imagen1.png";
import Imagen2 from "../Detail/IconDetail/Imagen2.png";
import Imagen3 from "../Detail/IconDetail/Imagen3.png";
import Imagen4 from "../Detail/IconDetail/Imagen4.png";
import Imagen5 from "../Detail/IconDetail/Imagen5.png";
import Imagen6 from "../Detail/IconDetail/Imagen6.png";
import '../../assets/styles/Detail.scss'
import TextTitle from '../Transparency/Transparency';

function Detail() {
  return (
    <Fragment>

      <div className="containerDetails">
        <TextTitle />
        <div className="containerBoxDetails">

          <div className="boxContainerDetail">
            <div className="container1">
              <img src={Imagen1} className="imgDetail" alt={"Imagen"} />
            </div>
            <ul>
              <h4>97.644</h4>
              <p>Almuerzos entregados</p>
            </ul>
          </div>

          <div className="boxContainerDetail">
            <div className="container1">
              <img src={Imagen2} className="imgDetail" alt={"Imagen"} />
            </div>
            <ul>
              <h4>3.200</h4>
              <p> Personas Alimentadas</p>
            </ul>
          </div>

          <div className="boxContainerDetail">
            <div className="container1">
              <img src={Imagen3} className="imgDetail" alt={"Imagen"} />
            </div>
            <ul>
              <h4>19</h4>
              <p>Restaurantes Activos</p>
            </ul>
          </div>

          <div className="boxContainerDetail">
            <div className="container1">
              <img src={Imagen4} className="imgDetail" alt={"Imagen"} />
            </div>
            <ul>
              <h4>19</h4>
              <p>Pequeños Productores</p>
            </ul>

          </div>

          <div className="boxContainerDetail">
            <div className="container1">
              <img src={Imagen5} className="imgDetail" alt={"Imagen"} />
            </div>
            <ul>
              <h4>96</h4>
              <p>Puestos de Empleo</p>
            </ul>

          </div>

          <div className="boxContainerDetail">
            <div className="container1">
              <img src={Imagen6} className="imgDetail" alt={"Imagen"} />
            </div>
            <ul>
              <h4>12</h4>
              <p>Comunas Beneficiadas</p>
            </ul>

          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Detail
