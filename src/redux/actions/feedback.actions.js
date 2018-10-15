export const setFeedback = toSet => ({
  type: "SET_FEEDBACK",
  payload: toSet
});

export const resetFeedback = () => ({
  type: "RESET_FEEDBACK"
});
