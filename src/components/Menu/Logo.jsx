import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { logoCPT } from "./imagenes/logoCPT.png";
import "./Logo.css";

const LogoHome = () => {
  return (
    <Fragment>
      <div className="container-logo">
        <Link to="/">
          <img src={logoCPT} className="imaLOgo" alt={"logo"} />
        </Link>
      </div>
    </Fragment>
  );
};

export default LogoHome;
// function Logo() {

//         return (
//             <Fragment>
//             <img  alt={"logo"}/>
//             </Fragment>
//         )
//     }

// export default Logo;
// import React, { Fragment } from 'react';

// function Logo() {

//         return (
//             <Fragment>
//             <img  alt={"logo"}/>
//             </Fragment>
//         )
//     }

// export default Logo;
