import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Card from "react-bootstrap/lib/Card";
import "./appCard.css";
import test from "../../../img/TestImage.jpg";

class AppCard extends Component {
  render() {
    return (
      <div>
        <Link to={this.props.link} className="links">
          <Card style={{ width: "18rem", margin: "20px" }}>
            <Card.Img variant="top" src={test} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  }
}

export default withRouter(AppCard);
