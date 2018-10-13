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

const defaultState = {
  field: 3,
  range: {
    min: 1,
    max: 5
  },
  question: "Did the programmer screw something up?",
  fieldType: "number",
  nextPage: "/"
};

const PageData = [
  {
    ...defaultState,
    path: "/",
    question: "How are you feeling today?",
    nextPage: "/2"
  },
  {
    ...defaultState,
    path: "/2",
    question: "How well are you understanding the content?",
    nextPage: "/3"
  },
  {
    ...defaultState,
    path: "/3",
    question: "How well are you being supported?",
    nextPage: "/4"
  },
  {
    ...defaultState,
    path: "/4",
    question: "Any comments you want to leave?",
    fieldType: "text",
    nextPage: "/5"
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CssBaseline />
          <Header />
          {PageData.map(page => {
            return (
              <Route
                key={page.path}
                path={page.path}
                exact
                render={props => {
                  return <V1Feeling {...props} initialState={page} />;
                }}
              />
            );
          })}
          {/* <Route
            path="/"
            exact
            render={props => {
              return <V1Feeling {...props} initialState={initialState1} />;
            }}
          />
          <Route path="/2" exact component={V2Understanding} />
          <Route path="/3" exact component={V3Supported} />
          <Route path="/4" exact component={V4Comments} />
          <Route path="/5" exact component={V5ThankYou} />
          <Route path="/admin" exact component={VAdmin} /> */}
          <DevNavFooter links={["/", "/2", "/3", "/4", "/5", "/admin"]} />
        </div>
      </Router>
    );
  }
}

export default App;
