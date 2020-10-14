import React, { Fragment } from "react";
import imgourgoal3 from "../../assets/static/Pics/imgourgoal3.jpg";
import { Icon, InlineIcon } from "@iconify/react";
import "../../assets/styles/components/OurGoalInf.scss";
import BtnDonate from "../Menu/BotonDonar";
import almuerzos from "../../assets/static/images/almuerzos.png";
import personasalimentadas from "../../assets/static/images/personasalimentadas.png";
import puestosempleo from "../../assets/static/images/puestosempleo.png";
import pequeñosp from "../../assets/static/images/pequeñosp.png";
import restaurantesa from "../../assets/static/images/restaurantesa.png";
import comunasb from "../../assets/static/images/comunasb.png";

const OurGoalInf = () => {
  return (
    <Fragment>
      <div className="principal-container-ourGoal">
        <div className="text-container1">
          <div className="title-img-ourGoal">Meta 2023</div>
          <div className="text-img-ourGoal">
            Nos hemos planteado poder generar en el período 2020-2023, índices
            de impacto colectivo que buscan beneficiar a una gran cantidad de
            comunidades, restaurantes y emprendedores .
          </div>
        </div>
        <div className="containerOurGoalInf">
          <div className="containerBoxOurGoalInf">
            <div className="boxContainerOurGoalInf">
              <div className="containerIcon-ourGoalInf">
                <img src={almuerzos} className="iconOurGoal" alt={"Imagen1"} />
              </div>
              <ul>
                <p className="title-text-OurGoalInf">500.000</p>
                <p className="content-text-ourGoalInf">Almuerzos entregados</p>
              </ul>
            </div>
          </div>
          <div className="containerBoxOurGoalInf">
            <div className="boxContainerOurGoalInf">
              <div className="containerIcon-ourGoalInf">
                <img
                  src={personasalimentadas}
                  className="iconOurGoal"
                  alt={"Imagen2"}
                />
              </div>

              <ul>
                <p className="title-text-OurGoalInf">3.200</p>
                <p className="content-text-ourGoalInf">Personas alimentadas</p>
              </ul>
            </div>
          </div>
          <div className="containerBoxOurGoalInf">
            <div className="boxContainerOurGoalInf">
              <div className="containerIcon-ourGoalInf">
                <img
                  src={restaurantesa}
                  className="iconOurGoal"
                  alt={"Imagen3"}
                />
              </div>

              <ul>
                <p className="title-text-OurGoalInf">32</p>
                <p className="content-text-ourGoalInf">
                  Restaurantes activaods
                </p>
              </ul>
            </div>
          </div>

          <div className="containerBoxOurGoalInf">
            <div className="boxContainerOurGoalInf">
              <div className="containerIcon-ourGoalInf">
                <img src={pequeñosp} className="iconOurGoal" alt={"Imagen4"} />
              </div>
              <ul>
                <p className="title-text-OurGoalInf">60</p>
                <p className="content-text-ourGoalInf">Pequeños productores</p>
              </ul>
            </div>
          </div>
          <div className="containerBoxOurGoalInf">
            <div className="boxContainerOurGoalInf">
              <div className="containerIcon-ourGoalInf">
                <img
                  src={puestosempleo}
                  className="iconOurGoal"
                  alt={"Imagen5"}
                />
              </div>
              <ul>
                <p className="title-text-OurGoalInf">96</p>
                <p className="content-text-ourGoalInf">Puestos de empleos</p>
              </ul>
            </div>
          </div>
          <div className="containerBoxOurGoalInf">
            <div className="boxContainerOurGoalInf">
              <div className="containerIcon-ourGoalInf">
                <img src={comunasb} className="iconOurGoal" alt={"Imagen6"} />
              </div>
              <ul>
                <p className="title-text-OurGoalInf">346</p>
                <p className="content-text-ourGoalInf">Comunas beneficiadas</p>
              </ul>
            </div>
          </div>
        </div>
        <div className="container-img-ourGoal1">
          <img
            className="principal-img-ourGoal"
            src={imgourgoal3}
            alt={"imgourgoal3"}
          ></img>
          <div className="text-help">
            <p>Para poder lograr esta meta necesitamos de tu ayuda.</p>
            <BtnDonate />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default OurGoalInf;
