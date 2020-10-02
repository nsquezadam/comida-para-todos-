import React, { Fragment } from 'react';
import '../src/assets/styles/App.scss';
import LinksRRSS from './components/Menu/LinksRRSS';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Silder from './components/Slider/Silder';
// import Navbar from './components/Menu/Navbar';
// import News from './components/Community/News';
// import BecomePart from './components/Community/BecomePart';
import Home from './components/Home'; 
// import Message from './components/Message/Message';
// import Transparency from '../src/components/Transparency/Transparency';
// import Detail from '../src/components/Detail/Detail';
// import Goals from './components/Goals/Goals';




function App() {
  return (
    <Fragment>
     
          <Router>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/test">
                <LinksRRSS />
              </Route>
            </Switch>
          </Router>
       
    </Fragment>
  );
}

export default App;
