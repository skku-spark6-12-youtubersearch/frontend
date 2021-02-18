import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./component/reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
const secret = require("./component/secret");

ReactGA.initialize(secret.TRACKING_ID, {
  debug: false,
  gaOptions: { siteSpeedSampleRate: 100 },
});
// ReactGA.pageview("/");

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
