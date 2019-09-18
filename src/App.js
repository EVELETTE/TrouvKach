import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

import Home from "./Home";
import Banks from "./Banks";
import Terminals from "./Terminals";
import Map from "./Map";

import mainLogo from "../src/assets/logo.png";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <center>
            <img src={mainLogo} alt={"TROUVKACH"} />
            <ul className="header">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/banks">Banks</NavLink>
              </li>
              <li>
                <NavLink to="/terminals">Terminals</NavLink>
              </li>
              <li>
                <NavLink to="/map">Map</NavLink>
              </li>
            </ul>
          </center>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/banks" component={Banks} />
            <Route path="/terminals" component={Terminals} />
            <Route path="/map" component={Map} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
