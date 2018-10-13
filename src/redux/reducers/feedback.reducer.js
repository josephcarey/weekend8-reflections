const feedbackReducer = (state = {}, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_FEELING":
      return { ...state, feeling: action.payload };
    case "SET_UNDERSTANDING":
      return { ...state, understanding: action.payload };
    case "SET_SUPPORT":
      return { ...state, support: action.payload };
    case "SET_COMMENTS":
      return { ...state, comments: action.payload };
    default:
      console.log(action.payload);
      return state;
  }
};

export default feedbackReducer;
