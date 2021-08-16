import React, { Profiler } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import 'bulma/css/bulma.min.css'  ;
import UseStateExample from "./react-hooks/UseStateExample";


ReactDOM.render(
  <React.StrictMode>
    <UseStateExample></UseStateExample>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVi tals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
