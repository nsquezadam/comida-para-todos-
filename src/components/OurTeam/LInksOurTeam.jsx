import React, { Fragment } from "react";
import "../../assets/styles/components/LinksOurTeam.scss";

const LinksOurTeam = () => {
  return (
    <Fragment>
      <div className="link-ourTeam-1">
        <a className="link-span" href="/">
          <p>Home > </p>
        </a>
      </div>
      <div className="link-ourTeam-1">
        <a className="link-span" href="/conocenos">
          <p>Conócenos > </p>
        </a>
      </div>
      <div className="link-ourTeam-color">
        <a className="link-span" href="/conocenos">
          <p>Nuestro equipo </p>
        </a>
      </div>
    </Fragment>
  );
};

export default LinksOurTeam;
