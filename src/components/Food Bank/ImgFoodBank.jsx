import React, { Fragment } from "react";
import "../../assets/styles/components/ImgCompFB.scss";
import Foodbank from '../../assets/static/images/imgFoodBank/Foodbank.jpg'
import LinksFoodBank from "./LinksFoodBank";

const ImgFoodBank = () => {
  return (
    <Fragment>
      <div className="principal-container-FB">
        <div className="linksToHome-2">
          <LinksFoodBank />
        </div>
        <div className="container-img-FB">
          <img
            className="principal-img-FB"
            src={Foodbank}
            alt={"Banco de alimentos"}
          ></img>
          <div className="principal-text-FB">Banco de Alimentos</div>
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

export default ImgFoodBank;