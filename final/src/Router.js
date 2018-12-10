import React from "react";
import { Route, Switch } from "react-router-dom";

// All pages here
import Attendant from "./components/pages/Attendant/attendant.js";
import Twitter from "./components/pages/Twitter/twitter.js";
import Login from "./components/pages/Login/login.js";
import Home from "./components/pages/Home/home.js";

const Router = () => (
  <main>
    <Switch>
      <Route path="/attendant" component={Attendant} />
      <Route path="/twitter" component={Twitter} />
      <Route path="/home" component={Home} />
      <Route path="/" component={Login} />
    </Switch>
  </main>
);

export default Router;
