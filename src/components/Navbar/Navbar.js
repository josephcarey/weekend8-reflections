import React, { Component } from "react";

// Router
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

class Navbar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="absolute" className="root">
          <Toolbar>
            <Typography
              align="center"
              variant="h4"
              color="inherit"
              className={classes.grow}
            >
              Feedback
            </Typography>
          </Toolbar>
        </AppBar>
        <AppBar position="relative" className="root">
          <Toolbar>
            <Typography
              align="center"
              variant="h4"
              color="inherit"
              className={classes.grow}
            >
              Feedback
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

class TheBar extends Component {
  render() {
    return (
      <Toolbar>
        <Typography align="center" variant="h4" color="inherit">
          Feedback
        </Typography>
      </Toolbar>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
