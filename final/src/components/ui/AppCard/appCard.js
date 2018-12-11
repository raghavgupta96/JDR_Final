import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Card from "react-bootstrap/lib/Card";
import Button from "react-bootstrap/lib/Button";
import Form from "react-bootstrap/lib/Form";
import "./appCard.css";
import test from "../../../img/TestImage.jpg";
import firebase from "../../../firestore.js";
const db = firebase.firestore();

class AppCard extends Component {
  state = {
    order: ""
  };

  handleSubmit = () => {
    window.alert("Ordered: " + this.input.value);

    db.settings({ timestampsInSnapshots: true });
    const userRef = db.collection("Requests").add({
      seatNumber: "E21",
      order: this.input.value
    });
  };

  callAttendant = () => {
    const userRef = db.collection("Requests").add({
      seatNumber: "E21",
      order: "Calling Attendant"
    });
  };

  isLinked = () => {
    if (this.props.link) {
      console.log(this.props.link);
      return (
        <Link to={this.props.link} className="links">
          <Card style={{ width: "18rem", margin: "20px" }}>
            <Card.Img variant="top" src={this.props.image} className="image" />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.description}</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      );
    } else {
      return (
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img variant="top" src={this.props.image} className="image" />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            {this.gotDropDown()}
          </Card.Body>
        </Card>
      );
    }
  };

  gotDropDown = () => {
    let content = [];
    if (this.props.dropdown) {
      console.log(this.props.dropdown);
      if (this.props.dropdown === "drinks") {
        content.push(
          <Form.Group controlId="formDrinks">
            <Form.Control
              as="select"
              ref={ref => {
                this.input = ref;
              }}
            >
              <option>...</option>
              <option>Water</option>
              <option>Soda</option>
            </Form.Control>
          </Form.Group>
        );
      } else if (this.props.dropdown === "snacks") {
        content.push(
          <Form.Group controlId="formSnacks">
            <Form.Control
              as="select"
              ref={ref => {
                this.input = ref;
              }}
            >
              <option>...</option>
              <option>Peanuts</option>
              <option>Chocolate</option>
            </Form.Control>
          </Form.Group>
        );
      }
      content.push(
        <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit
        </Button>
      );
    } else {
      content.push(
        <Button variant="primary" onClick={this.callAttendant}>
          Call Attendant
        </Button>
      );
    }
    return content;
  };

  render() {
    return <div>{this.isLinked()}</div>;
  }
}

export default withRouter(AppCard);
