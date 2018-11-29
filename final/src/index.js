import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCZh_vJ3HXfpmjUsNPZxWSVVEJlySicq3g",
  authDomain: "cmpe172-jdr.firebaseapp.com",
  databaseURL: "https://cmpe172-jdr.firebaseio.com",
  projectId: "cmpe172-jdr",
  storageBucket: "cmpe172-jdr.appspot.com",
  messagingSenderId: "575351954956"
};
firebase.initializeApp(config);

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
