import React, { Fragment } from "react";
// import "../../assets/styles/components/AboutUs.scss";
import NavbarR from "../Menu/toolbar/NavbarR";
import Footer from "../footer/Footer";
import TestimonialAccount from "./TestimonialAccount";
import ImgAccount from "./ImgAccount";

const Account = () => {
  return (
    <Fragment>
      <NavbarR />
      <ImgAccount />
      <TestimonialAccount />
      <Footer />
    </Fragment>
  );
};

export default Account;
