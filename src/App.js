import React, { Fragment } from 'react';
import '../src/assets/styles/App.scss';
import LinksRRSS from './components/Menu/LinksRRSS';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Slider from './components/slider/Slider';
import Navbar from './components/Menu/Navbar';

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
      </div>
    </Fragment>
  );
}

export default App;
