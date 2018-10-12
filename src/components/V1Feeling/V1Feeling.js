import React, { Component } from "react";

import ProgressBar from "../ProgressBar/ProgressBar";

class V1Feeling extends Component {
  render() {
    return (
      <div>
        <ProgressBar completed={1} />
        <h2>V1Feeling</h2>
      </div>
    );
  }
}

export default V1Feeling;
