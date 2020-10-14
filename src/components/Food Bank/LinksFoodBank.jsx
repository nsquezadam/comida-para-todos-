import React, { Fragment } from "react";
import "../../assets/styles/components/LinksFoodBank.scss"

const LinksFoodBank = () => {
  return (
    <Fragment>
      <div className="link-FoodB-1">
        <a className="link-span" href="/">
          <p>Home > </p>
        </a>
      </div>
      <div className="link-FoodB-1">
        <a className="link-span" href="/hazteparte">
          <p>Hazte Parte > </p>
        </a>
      </div>
      <div className=" link-FoodB-color">
        <a className="link-span" href="/bancoalimentos">
          <p>Banco de Alimentos </p>
        </a>
      </div>
    </Fragment>
  );
};

export default LinksFoodBank;
