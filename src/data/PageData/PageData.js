const defaultState = {
  default: 3,
  range: {
    min: 1,
    max: 5
  },
  question: "Did the programmer screw something up?",
  fieldType: "number",
  nextPage: "/"
};

const PageData = [
  {
    ...defaultState,
    path: "/",
    question: "How are you feeling today?",
    type: "feeling",
    nextPage: "/2"
  },
  {
    ...defaultState,
    path: "/2",
    question: "How well are you understanding the content?",
    type: "understanding",
    nextPage: "/3"
  },
  {
    ...defaultState,
    path: "/3",
    question: "How well are you being supported?",
    type: "support",
    nextPage: "/4"
  },
  {
    ...defaultState,
    path: "/4",
    question: "Any comments you want to leave?",
    type: "comments",
    default: "I love leaving feedback!",
    fieldType: "text",
    nextPage: "/5"
  }
];

export default PageData;
