import React, { Profiler } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import HelloWorld from "./helloworld";
import Profile from "./Profile";
import 'bulma/css/bulma.min.css'  ;


ReactDOM.render(
  <React.StrictMode>
    <HelloWorld></HelloWorld>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVi tals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
