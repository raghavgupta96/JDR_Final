import React from "react";
import { Route, Switch } from "react-router-dom";

// All pages here
import Login from "./components/pages/login/login.js";
import Home from "./components/pages/Home/home.js";

const Router = () => (
  <main>
    <Switch>
      <Route path="/home" component={Home} />
      <Route path="/" component={Login} />
    </Switch>
  </main>
);

export default Router;
