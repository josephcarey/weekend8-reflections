// react
import React, { Component } from "react";

// Material-UI
import { withStyles } from "@material-ui/core/styles";
import { TableCell, TableRow, Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3
  },
  table: {
    minWidth: 1020
  },
  tableWrapper: {
    overflowX: "auto"
  },
  cell: {
    align: "center"
  }
});

class FeedbackRow extends Component {
  render() {
    const { classes } = this.props;
    return (
      <TableRow>
        <TableCell>{this.props.feedback.date.slice(0, 10)}</TableCell>
        <TableCell>{this.props.feedback.feeling}</TableCell>
        <TableCell>{this.props.feedback.understanding}</TableCell>
        <TableCell>{this.props.feedback.support}</TableCell>
        <TableCell>{this.props.feedback.comments}</TableCell>
      </TableRow>
    );
  }
}

export default withStyles(styles)(FeedbackRow);
