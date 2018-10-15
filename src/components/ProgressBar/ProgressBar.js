import React, { Component } from "react";

import { withStyles } from "@material-ui/core/styles";
import { LinearProgress, Typography } from "@material-ui/core";

const styles = {
  root: {
    paddingTop: 25,
    paddingBottom: 25
  }
};

class ProgressBar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {!this.props.done ? (
          <>
            <Typography variant="caption" align="center">
              {this.props.completed + 1} of 4 pages
            </Typography>
            <LinearProgress
              variant="determinate"
              value={this.props.completed * 25}
            />
          </>
        ) : (
          <>
            <Typography variant="caption" align="center">
              Done!
            </Typography>
            <LinearProgress variant="determinate" value={100} />
          </>
        )}
      </div>
    );
  }
}

// const WithNumber = (ComponentIn, number) => {
//   return class ProgressBarWithNumber extends Component {
//     render() {
//       return (
//         <div>
//           <ComponentIn completed={number} />
//         </div>
//       );
//     }
//   };
// };

// export default ProgressBar;
// export default WithNumber(ProgressBar, 7);

export default withStyles(styles)(ProgressBar);
