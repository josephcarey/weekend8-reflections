import React, { Component } from "react";

import ProgressBar from "../ProgressBar/ProgressBar";

class V3Supported extends Component {
  render() {
    return (
      <div>
        <ProgressBar completed={3} />
        <h2>V3Supported</h2>
      </div>
    );
  }
}

export default V3Supported;
