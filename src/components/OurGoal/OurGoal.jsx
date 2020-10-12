import React, { Fragment } from "react";
import "../../assets/styles/components/OurGoal.scss";
import NavbarR from "../Menu/toolbar/NavbarR";
import Footer from "../footer/Footer";
import OurGoalInf from "./OurGoalInf";

const OurGoal = () => {
  return (
    <Fragment>
      <NavbarR />
      <OurGoalInf />

      <Footer />
    </Fragment>
  );
};

export default OurGoal;
