import React, { Fragment } from "react";

//import Navbar from './Menu/Navbar';
import "../assets/styles/components/Home.scss";
import NavbarR from "./Menu/toolbar/NavbarR";
import Slider from "./Slider/Slider";
import Detail from "./Detail/Detail";
//import Goals from "./Goals/Goals";
import BecomePart from "./Community/BecomePart";
import ActionLines from "./Community/ActionLines";
import News from "./Community/News";
import Testimonials from "./testimonials/Testimonials";
import SliderPart from "./sliderPartners/SliderPart";
import ContacForm from "./contacForm/ContacForm";
import Footer from "./footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <div style={{ height: "100%" }}>
        <div>
          <div>
            <NavbarR style={{ width: "100vw" }} />
          </div>
          <div>
            <Slider autoPlay={5} />
          </div>
        
          <div>
            <Detail />
          </div>
          <div>
            <BecomePart />
          </div>
          {/* <div>
            <Goals />
          </div> */}
          <div>
            <ActionLines />
          </div>
          <div style={{ height: "1000px", background: "#F2F2F2" }}>
            <News />
          </div>
          <div>
            <Testimonials />
          </div>
          <div>
            <SliderPart style={{ background: "#F2F2F2" }} />
          </div>
          <div>
            <ContacForm />
          </div>
          <div>
            <Footer style={{ height: "492px", background: "#333333" }} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
