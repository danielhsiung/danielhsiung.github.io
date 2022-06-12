import ReactDOM from "react-dom";
import App from "./component/App.js";
import { Provider } from "react-redux";
import store from "../src/store";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

