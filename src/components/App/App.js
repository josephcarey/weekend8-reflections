import React, { Component } from "react";

// react-router-dom
import { HashRouter as Router, Route } from "react-router-dom";

// @material-ui
import { CssBaseline, Paper } from "@material-ui/core/";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import deepPurple from "@material-ui/core/colors/deepPurple";
import yellow from "@material-ui/core/colors/yellow";

// my imports
import Navbar from "../Navbar/Navbar";
import FeedbackPage from "../FeedbackPage/FeedbackPage";
import ThankYouPage from "../ThankYouPage/ThankYouPage";
import AdminPage from "../AdminPage/AdminPage";
import DevNavFooter from "../DevNavFooter/DevNavFooter";
import ComponentFactory from "../ComponentFactory/ComponentFactory";
import PageData from "../../data/PageData/PageData";

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: yellow
  },
  typography: {
    useNextVariants: true
  }
});

class App extends Component {
  render() {
    let CoolThing = ComponentFactory("cool thing");
    return (
      <Router>
        <div>
          <CssBaseline />
          <MuiThemeProvider theme={theme}>
            <Navbar />
            {/* <CoolThing /> */}
            {PageData.map((page, index) => {
              return (
                <Route
                  key={page.path}
                  path={page.path}
                  exact
                  render={props => {
                    return (
                      <FeedbackPage {...props} page={index} setup={page} />
                    );
                  }}
                />
              );
            })}
            <Route path="/5" exact component={ThankYouPage} />
            <Route path="/admin" exact component={AdminPage} />
            <DevNavFooter links={["/", "/2", "/3", "/4", "/5", "/admin"]} />
          </MuiThemeProvider>
        </div>
      </Router>
    );
  }
}

export default App;
