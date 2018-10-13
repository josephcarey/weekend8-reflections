// react
import React, { Component } from "react";

// redux
import { connect } from "react-redux";

// actions
import { setFeeling } from "../../redux/actions/feedback.actions";

// my imports
import ProgressBar from "../ProgressBar/ProgressBar";

class V1Feeling extends Component {
  // state = {
  //   field: 3,
  //   range: {
  //     min: 1,
  //     max: 5
  //   },
  //   question: "How are you feeling today?",
  //   nextPage: "/2",
  //   fieldType: "number"
  // };
  state = {
    field: "",
    range: {
      min: "",
      max: ""
    },
    question: "",
    nextPage: "",
    fieldType: ""
  };

  componentDidMount() {
    this.setState(this.props.initialState);
  }

  inRange = (value, range) => {
    if (value >= range.min && value <= range.max) {
      return true;
    } else {
      return false;
    }
  };

  handleChange = event => {
    if (this.inRange(event.target.value, this.state.range)) {
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
    if (this.inRange(this.state.field, this.state.range)) {
      this.props.setFeeling(this.state.field);
      this.props.history.push(this.state.nextPage);
    }
  };

  render() {
    return (
      <div>
        <ProgressBar completed={1} />
        <h2>{this.state.question}</h2>
        <form onSubmit={this.moveOn}>
          {this.state.fieldType === "number" ? (
            <input
              type={this.state.fieldType}
              value={this.state.field}
              max={this.state.range.max}
              min={this.state.range.min}
              onChange={this.handleChange}
            />
          ) : (
            <input
              type={this.state.fieldType}
              value={this.state.field}
              onChange={this.handleOtherChange}
            />
          )}
        </form>
        <button onClick={this.moveOn}>Next</button>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setFeeling
};

export default connect(
  null,
  mapDispatchToProps
)(V1Feeling);
