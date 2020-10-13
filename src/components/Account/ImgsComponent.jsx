import React, { Fragment } from "react";
import "../../assets/styles/components/ImgsComponent.scss";
import techofraterno from "../../assets/static/Pics/techofraterno.jpg";

const ImgsComponent = () => {
  return (
    <Fragment>
      <div className="container-textOurModel">
        <p className="TextOurModel">
          Los diferentes aportes que recibimos, dan cuenta de la
          <strong> gran comunidad colaborativa </strong> que es
          <strong> Comida Para Todos. </strong> Nuestras memorias anuales,
          reflejan cuanto <strong> hemos podido crecer. </strong>
        </p>
      </div>
      <div className="principal-container-imgs">
        <div className="container-imgs">
          <div className="info-imgs">
            <p className="name-imgs">Comida Para Todos Memoria</p>
            <p className="office1">2020</p>
          </div>
          <img
            className="imgsComponents"
            src={techofraterno}
            alt={"techofraterno"}
          ></img>
        </div>
        <div className="container-imgs">
          <div className="info-imgs">
            <p className="name-imgs">Comida Para Todos Memoria</p>
            <p className="office1">2021 </p>
          </div>
          <img
            className="imgsComponents"
            src={techofraterno}
            alt={"techofraterno"}
          ></img>
        </div>
        <div className="container-imgs">
          <div className="info-imgs">
            <p className="name-imgs">Comida Para Todos Memoria</p>
            <p className="office1">2022</p>
          </div>
          <img
            className="imgsComponents"
            src={techofraterno}
            alt={"techofraterno"}
          ></img>
        </div>
        <div className="container-imgs">
          <div className="info-imgs">
            <p className="name-imgs">Comida Para Todos Memoria</p>
            <p className="office1">2023</p>
          </div>
          <img
            className="imgsComponents"
            src={techofraterno}
            alt={"techofraterno"}
          ></img>
        </div>
      </div>
    </Fragment>
  );
};

export default ImgsComponent;
