// react
import React, { Component } from "react";

// redux
import { connect } from "react-redux";

// axios
import axios from "axios";

import FeedbackRow from "../FeedbackRow/FeedbackRow";

// Material-UI
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from "@material-ui/core";

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

class AdminPage extends Component {
  state = {
    feedback: []
  };
  componentDidMount() {
    axios({
      method: "GET",
      url: "/feedback"
    })
      .then(response => {
        this.setState({
          feedback: response.data
        });
      })
      .catch(error => {
        alert("Something went wrong adding the feedback.");
        console.log("error:", error);
      });
  }

  moveOn = event => {
    event.preventDefault();
    this.props.history.push("/");
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <div className={classes.root}>
          <Typography variant="h5" align="center">
            Feedback:
          </Typography>
          <div align="center">
            <Table className={classes.table} aria-labelledby="tableTitle">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Feeling</TableCell>
                  <TableCell>Understanding</TableCell>
                  <TableCell>Support</TableCell>
                  <TableCell>Comments</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.feedback.map(feedback => {
                  return <FeedbackRow key={feedback.id} feedback={feedback} />;
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </Paper>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  feedbackToAdd: reduxState.feedbackToAdd
});

export default connect(mapReduxStateToProps)(withStyles(styles)(AdminPage));
