const feedbackReducer = (state = {}, action) => {
  switch (action.type) {
    case "EXAMPLE_ONE":
      console.log(action.payload);
      return state;
    default:
      console.log(action.payload);
      return state;
  }
};

export default feedbackReducer;
