import React, { Fragment } from "react";
import "../../assets/styles/components/LinksAboutUs.scss";

const LinksAboutUs = () => {
  return (
    <Fragment>
      <div className="link-aboutUs-1">
        <a className="link-span" href="/">
          <p>Home > </p>
        </a>
      </div>
      <div className="link-AboutUs-1">
        <a className="link-span" href="/conocenos">
          <p>Conócenos > </p>
        </a>
      </div>
      <div className="link-aboutUs-color">
        <a className="link-span" href="/conocenos">
          <p>Sobre nosotros </p>
        </a>
      </div>
    </Fragment>
  );
};

export default LinksAboutUs;