import React, { Fragment } from 'react';
import '../src/assets/styles/App.scss';
import LinksRRSS from './components/Menu/LinksRRSS';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Silder from './components/Slider/Silder';
import Navbar from './components/Menu/Navbar';
// import News from './components/Community/News';
// import BecomePart from './components/Community/BecomePart';
import ActionLines from "./components/Community/ActionLines";  
// import Message from './components/Message/Message';
// import Transparency from '../src/components/Transparency/Transparency';
// import Detail from '../src/components/Detail/Detail';
// import Goals from './components/Goals/Goals';




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
          <Silder />
        </div>
        <div>
          <ActionLines />
        </div>
        <div></div>

        <div>{/* <Message /> */}</div>
        <div>{/* <Transparency /> */}</div>
        <div>{/* <Detail /> */}</div>
        <div>{/* <Goals/> */}</div>
      </div>
    </Fragment>
  );
}

export default App;
