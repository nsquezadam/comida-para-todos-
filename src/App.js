import React, { Fragment } from 'react';
import '../src/assets/styles/App.scss';
import LinksRRSS from './components/Menu/LinksRRSS';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from './components/Menu/Navbar'
import Slider from './components/Slider/Slider';
import Message from './components/Message/Message';
import Detail from '../src/components/Detail/Detail';
import Goals from './components/Goals/Goals';
import BecomePart from './components/Community/BecomePart'
import News from './components/Community/News';
import ContacForm from './components/contacForm/ContacForm';
import Testimonials from './components/testimonials/Testimonials';
// NAVBAR RESPONSIVE 
//import Toolbar from './components/Menu/toolbar/Toolbar';



function App() {
  return (
    <Fragment>
      <div>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Navbar /> 
               
              </Route>
              <Route path="/test">
                <LinksRRSS /> 
              </Route>
            </Switch>
          </Router>
        </div>
        <div>
          <Slider /> 
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
          <ContacForm/> 
        </div>



      </div>
    </Fragment>
  );
}

export default App;
