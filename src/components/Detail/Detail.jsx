import React, { Fragment } from "react";
import Imagen1 from "../Detail/IconDetail/Imagen1.png";
import Imagen2 from "../Detail/IconDetail/Imagen2.png";
import Imagen3 from "../Detail/IconDetail/Imagen3.png";
import Imagen4 from "../Detail/IconDetail/Imagen4.png";
import Imagen5 from "../Detail/IconDetail/Imagen5.png";
import Imagen6 from "../Detail/IconDetail/Imagen6.png";
import '../../assets/styles/Detail.scss'


function Detail() {
  return (
    <Fragment>

      <div className="containerDetails">
      <div className="containerText">
          <p>"Queremos entregar <strong>alimentación de calidad y nutritiva</strong>; conectando, colaborando y generando asociatividad entre los actores involucrados."</p>
        </div>
        <div className="ContainerText">
          <p>"Desde el 22 de mayo de 2020"</p>
        </div>
        <div className="containerBoxDetails">

          <div className="boxContainerDetail">
            <div className="container1">
              <img src={Imagen1} className="imgDetail" alt={"Imagen"} />
            </div>
            <ul>
              <h4>100.000</h4>
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
