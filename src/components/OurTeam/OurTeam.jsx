import React, { Fragment } from "react";
import "../../assets/styles/components/OurTeam.scss";
import Footer from "../footer/Footer";
import NavbarR from "../Menu/toolbar/NavbarR";
import ImgOurTeam from "./ImgCompOurTeam";
import TeamMembers from "./TeamMembers";
import TextOurTeam from "./TextOurTeam";

const OurTeam = () => {
  return (
    <Fragment>
      <NavbarR />
      <ImgOurTeam />
      <TextOurTeam />
      <TeamMembers />
      <Footer />
    </Fragment>
  );
};

export default OurTeam;
