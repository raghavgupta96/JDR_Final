import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Navi from "../../ui/Navi/navi";

class Twitter extends Component {
  render() {
    return (
      <div>
        <Navi />
        twitter shit here
      </div>
    );
  }
}

export default withRouter(Twitter);
