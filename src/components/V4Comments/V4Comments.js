import React, { Component } from "react";

import ProgressBar from "../ProgressBar/ProgressBar";

class V4Comments extends Component {
  render() {
    return (
      <div>
        <ProgressBar completed={4} />
        <h2>V4Comments</h2>
      </div>
    );
  }
}

export default V4Comments;
