import React, { Fragment } from 'react';
import '../src/assets/styles/App.scss';
import LinksRRSS from './components/Menu/LinksRRSS';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import NavBarR from './components/Menu/toolbar/NavbarR'
//import Home from './components/Home'; 
//import Navbar from './components/Menu/Navbar'
<<<<<<< HEAD
=======

>>>>>>> 529122975109552193bd11caf1e1397b4f022e08
import Slider from './components/Slider/Slider';
import Message from './components/Message/Message';
import Detail from '../src/components/Detail/Detail';
import Goals from './components/Goals/Goals';
import BecomePart from './components/Community/BecomePart'
import News from './components/Community/News';
import ContacForm from './components/contacForm/ContacForm';
import Testimonials from './components/testimonials/Testimonials';
import ActionLines from './components/Community/ActionLines'
import SliderPart from './components/sliderPartners/SliderPart';
<<<<<<< HEAD
//import Footer from './components/footer/Footer';
=======
import Footer from './components/footer/Footer';
>>>>>>> 529122975109552193bd11caf1e1397b4f022e08

function App() {
  return (
    <Fragment>
      <div style={{ height: '100%' }}>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact>
                <NavBarR />

              </Route>
              <Route path="/test">
                <LinksRRSS />
              </Route>
            </Switch>
          </Router>
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
          <Message />
        </div>
        <div>
          <Detail />
        </div>
        <div>
          <Goals />
        </div>
        <div>
          <BecomePart />
        </div>
        <div>
          <ActionLines />
        </div>
        <div style={{ height: '1074px', background: '#F2F2F2' }}>
          <News />
        </div>
        <div>
          <Testimonials />
<<<<<<< HEAD
        </div>
        <div>
          <SliderPart />
        </div>
        <div>
          <ContacForm />
        </div>
        <div>
          {/* <Footer/> */}
        </div>
=======
      </div>
      <div>
        <SliderPart />
      </div>
      <div>
           <ContacForm/>
      </div>
      <div>
        <Footer style= {{height: '492px', background: '#333333'}}/> 
      </div>
>>>>>>> 529122975109552193bd11caf1e1397b4f022e08
      </div>
    </Fragment>
  );
}
export default App;