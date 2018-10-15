import React, { Component } from "react";

const CreateComponent = testThing =>
  class TestComponent extends Component {
    render() {
      return (
        <>
          <p>The word of the day is: {testThing}</p>
        </>
      );
    }
  };

// const myForm = ({
//   Container,
//   Label,
//   DateTimePicker
// }) => class MyForm extends React.Component {
//   render() {
//       const {
//           value,
//           label
//       } = this.props;

//       return (
//           <Label> {
//               label
//           } </Label>
//           <DateTimePicker value = {
//               value
//           }
//       /> </Container>;
//       )
//   }
// };

export default CreateComponent;
