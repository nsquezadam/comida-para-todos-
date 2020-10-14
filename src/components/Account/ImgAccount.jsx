import React, { Fragment } from "react";
import "../../assets/styles/components/ImgCompOurGoal.scss";
import "../../assets/styles/components/ImgsComponent.scss";
import techofraterno from "../../assets/static/Pics/techofraterno.jpg";
import image2 from "../../assets/static/Pics/image2.jpeg";
import image3 from "../../assets/static/Pics/image3.jpg";
import image4 from "../../assets/static/Pics/image4.jpeg";
import rendicion from "../../assets/static/images/rendicion.png";
import LinksAccount from "./LinksAccount";

const ImgAccount = () => {
  return (
    <Fragment>
      <div className="principal-container-aboutUs">
        <div className="linksToHome-2">
          <LinksAccount />
        </div>
        <div className="container-img-aboutUs">
          <img
            className="principal-img-aboutUs"
            src={rendicion}
            alt={"rendicion"}
          ></img>
          <div className="principal-text-aboutUs">Rendición de cuenta</div>
          <span class="scroll-btn">
            <a href="/">
              <span class="mouse">
                <span></span>
              </span>
            </a>
          </span>
        </div>
      </div>
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
          <img className="imgsComponents" src={image2} alt={"image2"}></img>
        </div>
        <div className="container-imgs">
          <div className="info-imgs">
            <p className="name-imgs">Comida Para Todos Memoria</p>
            <p className="office1">2022</p>
          </div>
          <img className="imgsComponents" src={image3} alt={"image3"}></img>
        </div>
        <div className="container-imgs">
          <div className="info-imgs">
            <p className="name-imgs">Comida Para Todos Memoria</p>
            <p className="office1">2023</p>
          </div>
          <img className="imgsComponents" src={image4} alt={"image4"}></img>
        </div>
      </div>
    </Fragment>
  );
};

export default ImgAccount;
