// react stuff
import React from "react";
import ReactDOM from "react-dom";

// redux stuff
import { applyMiddleware, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";

// reducers
import feedbackToAdd from "./redux/reducers/feedback.reducer";

// my imports
import App from "./components/App/App";

const allReducers = combineReducers({
  feedbackToAdd
});

const storeInstance = createStore(allReducers, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
