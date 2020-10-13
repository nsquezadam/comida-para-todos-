import React, { Fragment } from "react";
import "../../assets/styles/components/ImgCompOurGoal.scss";
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
    </Fragment>
  );
};

export default ImgAccount;
