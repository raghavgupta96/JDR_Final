import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

import Card from "react-bootstrap/lib/Card";
import Button from "react-bootstrap/lib/Button";
import Form from "react-bootstrap/lib/Form";
import "./shopCard.css";
import test from "../../../img/TestImage.jpg";
import firebase from "../../../firestore";
import PaypalButton from "../PaypalButton/PaypalButton";
const db = firebase.firestore();

const CLIENT = {
  sandbox: process.env.PAYPAL_CLIENT_ID_SANDBOX
};

const ENV = process.env.NODE_ENV === "production" ? "production" : "sandbox";

class AppCard extends Component {
  render() {
    const onSuccess = payment => console.log("Successful payment!", payment);

    const onError = error =>
      console.log("Erroneous payment OR failed to load script!", error);

    const onCancel = data => console.log("Cancelled payment!", data);

    return (
      <div>
        <Card style={{ width: "18rem", margin: "20px" }}>
          <Card.Img variant="top" src={this.props.image} className="image" />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Title>${this.props.price}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Form.Group controlId="formDrinks">
              <Form.Control
                as="select"
                ref={ref => {
                  this.input = ref * this.props.price;
                }}
              >
                <option>...</option>
                <option>1</option>
                <option>2</option>
              </Form.Control>
            </Form.Group>
            <PaypalButton
              client={CLIENT}
              env={ENV}
              commit={true}
              currency={"USD"}
              total={this.input.value}
              onSuccess={onSuccess}
              onError={onError}
              onCancel={onCancel}
            />
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withRouter(AppCard);
