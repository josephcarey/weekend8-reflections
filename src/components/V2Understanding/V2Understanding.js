import React, { Component } from "react";

import ProgressBar from "../ProgressBar/ProgressBar";

class V2Understanding extends Component {
  render() {
    return (
      <div>
        <ProgressBar completed={2} />
        <h2>V2Understanding</h2>
      </div>
    );
  }
}

export default V2Understanding;
