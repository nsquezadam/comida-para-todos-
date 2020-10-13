import React, { Fragment } from "react";
import "../src/assets/styles/App.scss";
//import LinksRRSS from './components/Menu/LinksRRSS';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import NavBarR from './components/Menu/toolbar/NavbarR';

//import Home from './components/Home';

//import Navbar from './components/Menu/Navbar'

// import Slider from './components/Slider/Slider';
// import Message from './components/Message/Message';
//  import Detail from '../src/components/Detail/Detail';
//  import Goals from './components/Goals/Goals';
//  import BecomePart from './components/Community/BecomePart'
//  import ActionLines from './components/Community/ActionLines'
//  import News from './components/Community/News';
// import ContacForm from './components/contacForm/ContacForm';
// import Testimonials from './components/testimonials/Testimonials';
// import SliderPart from './components/sliderPartners/SliderPart';
// import Footer from './components/footer/Footer';
//import OurTeam from "./components/OurTeam/OurTeam";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import OurGoal from "./components/OurGoal/OurGoal";
import Account from "./components/Account/Account";
import OurTeam from "./components/OurTeam/OurTeam";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/conocenos" exact component={AboutUs}></Route>
          <Route path="/nosotros" exact component={AboutUs}></Route>
          <Route path="/equipo" exact component={OurTeam}></Route>
          <Route path="/rendicion" exact component={Account}></Route>
          <Route path="/meta" exact component={OurGoal}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
