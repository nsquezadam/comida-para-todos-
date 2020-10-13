import React, { Fragment } from "react";
// import "../../assets/styles/components/AboutUs.scss";
import NavbarR from "../Menu/toolbar/NavbarR";
import Footer from "../footer/Footer";
import TestimonialAccount from "./TestimonialAccount";
import ImgAccount from "./ImgAccount";
import ImgsComponent from "./ImgsComponent";

const Account = () => {
  return (
    <Fragment>
      <NavbarR />
      <ImgAccount />
      <ImgsComponent />
      <TestimonialAccount />
      <Footer />
    </Fragment>
  );
};

export default Account;
