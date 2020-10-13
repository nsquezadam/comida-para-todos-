import React, { Fragment } from "react";
import "../../assets/styles/components/ImgCompOurGoal.scss";
import imgourgoal from "../../assets/static/Pics/imgourgoal.jpg";
import LinksOurGoal from "../OurGoal/LinksOurGoal";

const ImgOurGoal = () => {
  return (
    <Fragment>
      <div className="principal-container-aboutUs">
        <div className="linksToHome-1">
          <LinksOurGoal />
        </div>
        <div className="container-img-aboutUs">
          <img
            className="principal-img-aboutUs"
            src={imgourgoal}
            alt={"imgourgoal"}
          ></img>
          <div className="principal-text-aboutUs">Nuestra meta</div>
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

export default ImgOurGoal;
