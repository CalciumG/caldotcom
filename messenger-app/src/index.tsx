import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import LoginComponent from "./Components/login/login";
import { SignUpComponent } from "./Components/signup/signup";
import DashboardComponent from "./Components/dashboard/dashboard";
import { Route, BrowserRouter as Router } from "react-router-dom";

const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyDzTMz6E2Su8qz5f7zimKQrXVKriCM6UHY",
  authDomain: "cals-messenger.firebaseapp.com",
  databaseURL: "https://cals-messenger.firebaseio.com",
  projectId: "cals-messenger",
  storageBucket: "cals-messenger.appspot.com",
  messagingSenderId: "353793071100",
  appId: "1:353793071100:web:c2c198e02134f995c68479",
});

const routing = (
  <Router>
    <div id="routing-container">
      <Route path="/login" component={LoginComponent}></Route>
      <Route path="/signup" component={SignUpComponent}></Route>
      <Route path="/dashboard" component={DashboardComponent}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
