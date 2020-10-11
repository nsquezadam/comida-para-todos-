import React, { Fragment } from "react";
import "../../assets/styles/components/AboutUs.scss";
import NavbarR from "../Menu/toolbar/NavbarR";
import Footer from "../footer/Footer";
import TextAboutUs from "./TextAboutUs";
import ImgAboutUs from "./ImgCompAboutUs";
import ImgAboutUsInfo from "./ImgAboutUsInfo";

const AboutUs = () => {
  return (
    <Fragment>
      <NavbarR />
      <ImgAboutUs />
      <TextAboutUs />
      <ImgAboutUsInfo />
      <Footer />
    </Fragment>
  );
};

export default AboutUs;
