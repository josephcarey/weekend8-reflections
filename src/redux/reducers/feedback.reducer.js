const feedbackReducer = (state = {}, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_FEEDBACK":
      switch (action.payload.type) {
        case "feeling":
          return { ...state, feeling: action.payload.field };

        case "understanding":
          return { ...state, understanding: action.payload.field };

        case "support":
          return { ...state, support: action.payload.field };

        case "comments":
          return { ...state, comments: action.payload.field };

        default:
          return state;
      }

    case "RESET_FEEDBACK":
      return {};

    default:
      return state;
  }
};

export default feedbackReducer;
