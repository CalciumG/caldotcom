import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const Tabletop = require("tabletop");

// var publicSpreadsheetUrl =
//   "URL OF SPREADSHEET AS YOU FIND IN THE BROWSER ADDRESS BAR";

// function init() {
//   Tabletop.init({
//     key: publicSpreadsheetUrl,
//     callback: showInfo,
//     simpleSheet: false,
//   });
// }

// function showInfo(data, tabletop) {
//   // do something with the data
//   console.log(JSON.stringify(data, null, 2));
// }

// //initialise and kickstart the whole thing.
// init();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
