import React from 'react';
import '../src/Styles/App.scss'
import NavBar from './components/Menu/Navbar';
import LinksRRSS from './components/Menu/LinksRRSS';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Slider from './components/slider/Slider';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <Slider />
        </Route>

        <Route path="/test">
          <LinksRRSS />
        </Route>
      
      </Switch>
    </Router>
  );
}

export default App;
