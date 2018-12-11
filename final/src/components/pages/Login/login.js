import React, { Component } from "react";
import Button from "react-bootstrap/lib/Button";
import Auth from "../../Auth.js";
import "./login.css";

const auth = new Auth();

class Login extends Component {
  render() {
    return (
      <div className="content">
        <h1> Welcome! </h1>
        <h2> Enjoy your inflight experience</h2>
        <Button variant="primary" type="submit" onClick={auth.login}>
          Log In
        </Button>
      </div>
    );
  }
}

export default Login;
