import React, { Fragment } from "react";
import logoFooter from "../../assets/static/images/logoFooter.png";
import '../../assets/styles/components/LogoFooter.scss'; 

const LogoFooter = () => {
  return (
    <Fragment>
      <div className="container-logo-footer">
        <img src={logoFooter} className="imgLogoFooter" alt={"logoFooter"} />
      </div>
    </Fragment>
  );
};

export default LogoFooter;
