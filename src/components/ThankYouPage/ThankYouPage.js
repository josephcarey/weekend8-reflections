// react
import React, { Component } from "react";

// redux
import { connect } from "react-redux";

// actions
import { resetFeedback } from "../../redux/actions/feedback.actions";

// axios
import axios from "axios";

// Material-UI
import { withStyles } from "@material-ui/core/styles";
import { Button, Paper, Typography } from "@material-ui/core";

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

class ThankYouPage extends Component {
  componentDidMount() {
    if (
      this.props.feedbackToAdd.feeling &&
      this.props.feedbackToAdd.understanding &&
      this.props.feedbackToAdd.support &&
      this.props.feedbackToAdd.comments
    ) {
      axios({
        method: "POST",
        url: "/feedback",
        data: this.props.feedbackToAdd
      })
        .then(() => {
          this.props.resetFeedback();
        })
        .catch(error => {
          alert("Something went wrong adding the feedback.");
          console.log("error:", error);
        });
    } else {
      alert("Please complete the form before attempting to submit feedback.");
    }
  }

  moveOn = event => {
    event.preventDefault();
    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <ProgressBar done />
        <div className={classes.root}>
          <Typography variant="h5" align="center">
            Thank you for your feedback!
          </Typography>
          <div align="center">
            <div className={classes.spacer} />
            <Button variant="contained" color="primary" onClick={this.moveOn}>
              Submit More Feedback
            </Button>
          </div>
        </div>
      </Paper>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  feedbackToAdd: reduxState.feedbackToAdd
});

const mapDispatchToProps = {
  resetFeedback
};

export default connect(
  mapReduxStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ThankYouPage));
