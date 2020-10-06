import React, { Fragment } from 'react';
import '../src/assets/styles/App.scss';
import LinksRRSS from './components/Menu/LinksRRSS';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
<<<<<<< HEAD
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

=======
//import Navbar from './components/Menu/Navbar'
import Slider from './components/slider/Slider';
// import Message from './components/Message/Message';
// import Detail from '../src/components/Detail/Detail';
// import Goals from './components/Goals/Goals';
// import BecomePart from './components/Community/BecomePart'
//import News from './components/Community/News';
// import ContacForm from './components/contacForm/ContacForm';
// import Testimonials from './components/testimonials/Testimonials';
 import NavBarR from './components/Menu/toolbar/NavbarR'
>>>>>>> 90d7b3d0e924c7837e09bcbf09754fd8f6a48ad6


function App() {
  

  return (
    <Fragment>
      <div  style={{height:'100%'}}>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact>
<<<<<<< HEAD
                <Navbar /> 
               
=======
                {/* <Navbar /> */}
                <NavBarR />
               

>>>>>>> 90d7b3d0e924c7837e09bcbf09754fd8f6a48ad6
              </Route>
              <Route path="/test">
                <LinksRRSS /> 
              </Route>
            </Switch>
          </Router>
        </div>
        <div>
<<<<<<< HEAD
          <Slider /> 
=======
           <Slider />
>>>>>>> 90d7b3d0e924c7837e09bcbf09754fd8f6a48ad6
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
