import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
// import Hello from "./Hello";
import reportWebVitals from "./reportWebVitals";
// import State from "./state";

ReactDOM.render(
  <React.StrictMode>
    {/* <Hello /> */}
    <App />
    {/* <State warna="Merah" /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
