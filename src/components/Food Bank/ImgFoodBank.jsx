import React, { Fragment } from "react";
import "../../assets/styles/components/ImgCompOurGoal.scss";
import Foodbank from '../../assets/static/images/imgFoodBank/Foodbank.jpg'
import LinksFoodBank from "./LinksFoodBank";

const ImgAccount = () => {
  return (
    <Fragment>
      <div className="principal-container-aboutUs">
        <div className="linksToHome-2">
          <LinksFoodBank />
        </div>
        <div className="container-img-aboutUs">
          <img
            className="principal-img-aboutUs"
            src={Foodbank}
            alt={"Banco de alimentos"}
          ></img>
          <div className="principal-text-aboutUs">Banco de Alimentos</div>
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