import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

window.initMyWidget = (containerId) => {
  ReactDOM.render(<App />, document.getElementById(containerId));
};
