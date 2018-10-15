// react
import React, { Component } from "react";

// redux
import { connect } from "react-redux";

// actions
import { setFeedback } from "../../redux/actions/feedback.actions";

// Material-UI
import { withStyles } from "@material-ui/core/styles";
import { Button, Paper, Radio, TextField, Typography } from "@material-ui/core";

// my imports
import ProgressBar from "../ProgressBar/ProgressBar";

const styles = theme => ({
  root: {
    padding: 20,
    align: "center"
  },
  group: {
    width: "auto",
    height: "auto",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    margin: `${theme.spacing.unit}px 0`
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  spacer: {
    marginTop: 20
  }
});

class FeedbackPages extends Component {
  state = {
    field: ""
  };

  componentDidMount() {
    this.setState({
      field: this.props.setup.default,
      type: this.props.setup.type
    });
  }

  inRange = (value, range) => {
    if (value >= range.min && value <= range.max) {
      return true;
    } else {
      return false;
    }
  };

  handleChange = event => {
    if (this.inRange(event.target.value, this.props.setup.range)) {
      this.handleOtherChange(event);
    }
  };

  handleOtherChange = event => {
    this.setState({
      ...this.state,
      field: event.target.value
    });
  };

  moveOn = event => {
    event.preventDefault();
    if (
      this.props.setup.fieldType !== "number" ||
      this.inRange(this.state.field, this.props.setup.range)
    ) {
      this.props.setFeedback(this.state);
      this.props.history.push(this.props.setup.nextPage);
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <ProgressBar completed={this.props.page} />
        <div className={classes.root}>
          <Typography variant="h5" align="center">
            {this.props.setup.question}
          </Typography>
          <div align="center">
            <form onSubmit={this.moveOn}>
              {this.props.setup.fieldType === "number" ? (
                <div>
                  <Radio
                    name="1"
                    checked={this.state.field === "1"}
                    onChange={this.handleChange}
                    color="primary"
                    value="1"
                  />
                  <Radio
                    checked={this.state.field === "2"}
                    onChange={this.handleChange}
                    color="primary"
                    value="2"
                  />
                  <Radio
                    checked={this.state.field === "3"}
                    onChange={this.handleChange}
                    color="primary"
                    value="3"
                  />
                  <Radio
                    checked={this.state.field === "4"}
                    onChange={this.handleChange}
                    color="primary"
                    value="4"
                  />
                  <Radio
                    checked={this.state.field === "5"}
                    onChange={this.handleChange}
                    color="primary"
                    value="5"
                  />
                  {/* <br />
                  <input
                    type={this.props.setup.fieldType}
                    value={this.state.field}
                    max={this.props.setup.range.max}
                    min={this.props.setup.range.min}
                    onChange={this.handleChange}
                  /> */}
                </div>
              ) : (
                <TextField
                  // type={this.props.setup.fieldType}
                  value={this.state.field}
                  onChange={this.handleOtherChange}
                />
              )}
            </form>
            <div className={classes.spacer} />
            <Button variant="contained" color="primary" onClick={this.moveOn}>
              Next
            </Button>
          </div>
        </div>
      </Paper>
    );
  }
}

const mapDispatchToProps = {
  setFeedback
};

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(FeedbackPages));
