import React, { Fragment } from 'react';
import '../src/Styles/App.scss'
import NavbarMenu from './components/Menu/Navbar';
import LinksRRSS from './components/Menu/LinksRRSS';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import '../src/Styles/Slider.scss'
import Slider from './components/slider/Slider';

function App() {
  return (
    <Fragment>
      <div>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact>
                <NavbarMenu />
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
      </div>
    </Fragment>
  );
}

export default App;
