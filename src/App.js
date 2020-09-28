import React, { Fragment } from 'react';
import '../src/assets/styles/App.scss';
import NavBar from './components/Menu/Navbar';
import LinksRRSS from './components/Menu/LinksRRSS';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
<<<<<<< HEAD
import '../src/Styles/Slider.scss'
import Slider from './components/Slider/Slider';
=======
import Slider from './components/slider/Slider';
>>>>>>> b6a3662e5f8afb7ec26bda9f2b3bfd841baeda50

function App() {
  return (
    <Fragment>
      <div>
        <div>
          <Router>
            <Switch>
              <Route path="/" exact>
                <NavBar />
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
