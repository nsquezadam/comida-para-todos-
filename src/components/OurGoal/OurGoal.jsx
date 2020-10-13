import React, { Fragment } from "react";
import "../../assets/styles/components/OurGoal.scss";
import NavbarR from "../Menu/toolbar/NavbarR";
import Footer from "../footer/Footer";
import OurGoalInf from "./OurGoalInf";
import ImgOurGoal from "./ImgCompOurGoal";
import OurModel from "./OurModel";

const OurGoal = () => {
  return (
    <Fragment>
      <NavbarR />
      <ImgOurGoal />
      <OurModel />
      <OurGoalInf />

      <Footer />
    </Fragment>
  );
};

export default OurGoal;
