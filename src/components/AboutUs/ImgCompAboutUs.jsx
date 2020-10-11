import React, { Fragment } from "react";
import "../../assets/styles/components/ImgCompAboutUs.scss";
import aboutus from "../../assets/static/Pics/aboutus.jpg";
import LinksAboutUs from "./LinksAboutUs";

const ImgAboutUs = () => {
  return (
    <Fragment>
      <div className="principal-container-aboutUs">
        <div className="linksToHome-1">
          <LinksAboutUs />
        </div>
        <div className="container-img-aboutUs">
          <img
            className="principal-img-aboutUs"
            src={aboutus}
            alt={"aboutus"}
          ></img>
          <div className="principal-text-aboutUs">Sobre nosotros</div>
          <span class="scroll-btn">
            <a href="/">
              <span class="mouse">
                <span></span>
              </span>
            </a>
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default ImgAboutUs;
