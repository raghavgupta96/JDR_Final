import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import ReactDOM from "react-dom";

import Card from "react-bootstrap/lib/Card";
import Form from "react-bootstrap/lib/Form";
import "./shopCard.css";
import firebase from "../../../firestore";
import PaypalButton from "../PaypalButton/PaypalButton";
const db = firebase.firestore();

const CLIENT = {
  sandbox:
    "AWxth9v9dmDzjDMGrVHjifABaTGLuqWtrWr_3ZUjuFP94KbhxNTMVQvGnPwGyEPFxPP3v3GIsXuUUQSi"
};

const ENV = process.env.NODE_ENV === "production" ? "production" : "sandbox";

class shopCard extends Component {
  constructor(props) {
    super(props);
    this.state = { price: this.props.price };
  }

  updatePrice(e) {
    console.log("Quantity: " + this.input.value);
    const finalPrice = this.props.price * this.input.value;
    console.log("Final Price: " + finalPrice);
    this.setState({ price: finalPrice });
  }

  render() {
    const onSuccess = payment => {
      db.settings({ timestampsInSnapshots: true });
      const userRef = db.collection("Shop").add({
        seatNumber: "E21",
        order: this.state.price,
        quantity: this.input.value,
        item: this.props.title
      });
      console.log("Successful payment!", payment);
      window.alert("Ordered placed");

      //window.location.reload();
    };

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
                  this.input = ref;
                }}
                onChange={this.updatePrice.bind(this)}
              >
                <option>1</option>
                <option>2</option>
              </Form.Control>
            </Form.Group>
            <PaypalButton
              client={CLIENT}
              env={ENV}
              commit={true}
              currency={"USD"}
              total={this.state.price}
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

export default withRouter(shopCard);
