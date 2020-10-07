import React, { Fragment } from 'react';
import '../src/assets/styles/App.scss';
//import LinksRRSS from './components/Menu/LinksRRSS';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBarR from './components/Menu/toolbar/NavbarR'
//import Home from './components/Home'; 

// import Transparency from '../src/components/Transparency/Transparency';
import Slider from './components/slider/Slider';
import Message from './components/Message/Message';
 import Detail from '../src/components/Detail/Detail';
 import Goals from './components/Goals/Goals';
 import BecomePart from './components/Community/BecomePart'
 import News from './components/Community/News';
import ContacForm from './components/contacForm/ContacForm';
import Testimonials from './components/testimonials/Testimonials';
import SliderPart from './components/sliderPartners/SliderPart';
//import Footer from './components/footer/Footer';







function App() {
  

  return (
    <Fragment>
      <div  style={{height:'100%'}}>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact>
                <NavBarR />

              </Route>
              <Route path="/test">
                {/* <LinksRRSS /> */}
              </Route>
            </Switch>
          </Router>
        </div>
        <div>
            <Slider autoPlay={5}/> 
  
        </div>
        <div>
           <Message /> 
        </div>
        <div>
           <Detail /> 
        </div>
        <div>
           <Goals/> 
        </div>
      <div>
          <BecomePart /> 
      </div>
      <div>
           <News />  
      </div>
      <div>
          <Testimonials />
      </div>
      <div>
        <SliderPart  />
      </div>
      <div>
           <ContacForm/>
      </div>
      <div>
        {/* <Footer/> */}
      </div>
      </div>
    </Fragment>
  );
}

export default App;
