import React, { Fragment } from "react";
import "../../assets/styles/components/OurModel.scss";
import alimentos3 from "../../assets/static/Pics/alimentos3.jpg";
import multiplicaciondeaportes from "../../assets/static/Pics/multiplicaciondeaportes.jpg";
import entregaAlimentos from "../../assets/static/Pics/entregaAlimentos.jpg";
import sostenibilidad from "../../assets/static/Pics/sostenibilidad.jpg";
import comidaparatodos7 from "../../assets/static/Pics/comidaparatodos7.jpg";

const OurModel = () => {
  return (
    <Fragment>
      <div className="container-textOurModel">
        <p className="TextOurModel">
          Cada día trabajamos en busca de poder lograr llevar alimentación de
          calidad, saludable y llena de amor a las
          <strong> comunidades que se encuentran vulnerables. </strong>
        </p>
        <div className="container-subTilte-ourModel">
          <p className="subTitle-ourModel">Modelo de operación</p>
        </div>
      </div>
      <div className="containerOurModel">
        <div className="containerBoxOurModel">
          <div className="boxContainerOurModel">
            <div className="containerImgOurModel">
              <img
                className="img-OurGoal"
                src={alimentos3}
                alt={"alimentos3"}
              />
            </div>
            <ul>
              <p className="title-text-OurModel">Plataforma solidaria</p>
              <p className="content-text-OurModel">
                Personas ingresan a www.comidaparatodos.cl y aportan almuerzos
                solidarios.
              </p>
            </ul>
          </div>
        </div>

        <div className="containerBoxOurModel">
          <div className="boxContainerOurModel">
            <div className="containerImgOurModel">
              <img
                className="img-OurGoal"
                src={multiplicaciondeaportes}
                alt={"multiplicaciondeaportes"}
              />
            </div>

            <ul>
              <p className="title-text-OurModel">Multiplicación de aportes</p>
              <p className="content-text-OurModel">
                Empresas e instituciones públicas y privadas, multiplican los
                aportes realizados.
              </p>
            </ul>
          </div>
        </div>

        <div className="containerBoxOurModel">
          <div className="boxContainerOurModel">
            <div className="containerImgOurModel">
              <img
                className="img-OurGoal"
                src={comidaparatodos7}
                alt={"comidaparatodos"}
              />
            </div>

            <ul>
              <p className="title-text-OurModel">Almuerzos en marcha</p>
              <p className="content-text-OurModel">
                Los aportes obtenidos, se transfieren a restaurantes para cubrir
                costos de producción y personal.
              </p>
            </ul>
          </div>
        </div>

        <div className="containerBoxOurModel">
          <div className="boxContainerOurModel">
            <div className="containerImgOurModel">
              <img
                className="img-OurGoal"
                src={entregaAlimentos}
                alt={"entregaAlimentos"}
              />
            </div>
            <ul>
              <p className="title-text-OurModel">Entrega de alimentos</p>
              <p className="content-text-OurModel">
                Los alimentos cocinados por los restaurantes, llega a los
                sectores vulnerables.
              </p>
            </ul>
          </div>
        </div>
        <div className="containerBoxOurModel">
          <div className="boxContainerOurModel">
            <div className="containerImgOurModel">
              <img
                className="img-OurGoal"
                src={entregaAlimentos}
                alt={"entregaAlimentos"}
              />
            </div>
            <ul>
              <p className="title-text-OurModel">Sostenibilidad de proyecto</p>
              <p className="content-text-OurModel">
                Un restaurante apadrina a una comunidad, capacitandola en
                materia de alimentación saludable.
              </p>
            </ul>
          </div>
        </div>
        <div className="containerBoxOurModel">
          <div className="boxContainerOurModel">
            <div className="containerImgOurModel">
              <img
                className="img-OurGoal"
                src={sostenibilidad}
                alt={"sostenibilidad"}
              />
            </div>
            <ul>
              <p className="title-text-OurModel">Sostenibilidad de proyecto</p>
              <p className="content-text-OurModel">
                Un restaurante apadrina a una comunidad, capacitandola en
                materia de alimentación saludable.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default OurModel;
