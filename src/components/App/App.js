import React, { Component } from "react";

// react-router-dom
import { HashRouter as Router, Route } from "react-router-dom";

// @material-ui
import CssBaseline from "@material-ui/core/CssBaseline";

// my imports
import Header from "../Header/Header";
import V1Feeling from "../V1Feeling/V1Feeling";
import V2Understanding from "../V2Understanding/V2Understanding";
import V3Supported from "../V3Supported/V3Supported";
import V4Comments from "../V4Comments/V4Comments";
import V5ThankYou from "../V5ThankYou/V5ThankYou";
import VAdmin from "../VAdmin/VAdmin";
import DevNavFooter from "../DevNavFooter/DevNavFooter";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CssBaseline />
          <Header />
          <Route path="/" exact component={V1Feeling} />
          <Route path="/2" exact component={V2Understanding} />
          <Route path="/3" exact component={V3Supported} />
          <Route path="/4" exact component={V4Comments} />
          <Route path="/5" exact component={V5ThankYou} />
          <Route path="/admin" exact component={VAdmin} />
          <DevNavFooter links={["/", "/2", "/3", "/4", "/5", "/admin"]} />
        </div>
      </Router>
    );
  }
}

export default App;
