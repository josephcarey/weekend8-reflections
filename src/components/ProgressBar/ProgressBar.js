import React, { Component } from "react";

class ProgressBar extends Component {
  render() {
    return (
      <>
        <p>{this.props.completed} of 4 pages</p>
      </>
    );
  }
}

const WithNumber = (ComponentIn, number) => {
  return class extends Component {
    render() {
      return (
        <div>
          <ComponentIn completed={number} />
        </div>
      );
    }
  };
};

// export default ProgressBar;
export default WithNumber(ProgressBar, 7);
