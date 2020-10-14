import React, { Fragment } from "react";

//import Navbar from './Menu/Navbar';
import "../assets/styles/components/Home.scss";

//import Navbar from './components/Menu/Navbar'

// import Slider from './components/Slider/Slider';
// import Message from './components/Message/Message';
//  import Detail from './components/Detail/Detail';
//  import Goals from './components/Goals/Goals';
//  import BecomePart from './Community/BecomePart';
// import ActionLines from './Community/ActionLines';
//  import News from './Community/News';
// import ContacForm from './components/contacForm/ContacForm';
// import Testimonials from './components/testimonials/Testimonials';
// import SliderPart from './components/sliderPartners/SliderPart';
// import Footer from './components/footer/Footer';
import NavbarR from "./Menu/toolbar/NavbarR";
import Slider from "./Slider/Slider";
import Message from "./Message/Message";
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
            <NavbarR />
          </div>
          <div>
            <Slider autoPlay={5} />
          </div>
          <div>
            <Message />
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
