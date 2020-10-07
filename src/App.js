import React, { Fragment } from 'react';
import '../src/assets/styles/App.scss';
//import LinksRRSS from './components/Menu/LinksRRSS';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
<<<<<<< HEAD
import Silder from './components/Slider/Silder';
// import Navbar from './components/Menu/Navbar';
// import News from './components/Community/News';
// import BecomePart from './components/Community/BecomePart';
import Home from './components/Home'; 
// import Message from './components/Message/Message';
// import Transparency from '../src/components/Transparency/Transparency';
// import Detail from '../src/components/Detail/Detail';
// import Goals from './components/Goals/Goals';
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

>>>>>>> develop




function App() {
  

  return (
    <Fragment>
<<<<<<< HEAD
     
          <Router>
            <Switch>
              <Route path="/" exact>
                <Home />
=======
      <div  style={{height:'100%'}}>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact>
                {/* <Navbar /> */}
                <NavBarR />
               

>>>>>>> develop
              </Route>
              <Route path="/test">
                {/* <LinksRRSS /> */}
              </Route>
            </Switch>
          </Router>
<<<<<<< HEAD
       
=======
        </div>
        <div>
            <Slider autoPlay={5}/> 
  
        </div>
        <div>
          {/* <Message /> */}
        </div>

        <div>
          {/* <Detail /> */}
        </div>
        <div>
           {/* <Goals/>  */}
        </div>
       <div>
       {/* <BecomePart /> */}
       </div>
       <div>
         {/* <News /> */}
       </div>
        <div>
      {/* <Testimonials /> */}
       </div>
        <div>
          {/* <ContacForm/> */}
        </div>



      </div>
>>>>>>> develop
    </Fragment>
  );
}

export default App;
