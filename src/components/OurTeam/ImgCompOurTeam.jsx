import React, { Fragment } from "react";
import "../../assets/styles/components/ImgCompOurTeam.scss";
import ourteam from "../../assets/static/Pics/ourteam.jpg";
import LinksOurTeam from "./LInksOurTeam";

const ImgOurTeam = () => {
  return (
    <Fragment>
      <div className="principal-container-ourTeam">
        <div className="linksToHome">
          <LinksOurTeam />
        </div>
        <div className="container-img-ourTeam">
          <img
            className="principal-img-ourTeam"
            src={ourteam}
            alt={"ourteam"}
          ></img>
          <div className="principal-text-ourTeam">Nuestro equipo</div>
          <span class="scroll-btn">
            <a href="#nuestroequipo">
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

export default ImgOurTeam;
