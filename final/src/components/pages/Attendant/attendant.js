import React, { Component } from "react";
import AppCard from "../../ui/AppCard/appCard";
import Navi from "../../ui/Navi/navi";
import { withRouter } from "react-router-dom";
import ListGroup from "react-bootstrap/lib/ListGroup";
import "./attendant.css";
import steward from "../../../img/steward.png";
import snacks from "../../../img/snacks.jpg";
import drinks from "../../../img/drinks.jpg";

import firebase from "../../../firestore.js";
const db = firebase.firestore();

const passenger = [
  {
    title: "Snacks",
    description: "Request for a light snack",
    image: snacks,
    dropdown: "snacks"
  },
  {
    title: "Beverage",
    description: "Watch something to pass the time",
    image: drinks,
    dropdown: "drinks"
  },
  {
    title: "Attendant",
    description: "Call the Attendant",
    image: steward
  }
];

const currentUser = "attendant";

class Attendant extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCards = () => {
    let arr = [...passenger];

    return arr.map(app => (
      <AppCard
        title={app.title}
        description={app.description}
        link={app.link}
        image={app.image}
        dropdown={app.dropdown}
      />
    ));
  };

  componentWillMount() {
    db.collection("Requests")
      .get()
      .then(snap => {
        const items = [];
        snap.forEach(item => {
          items.push(item.data());
        });
        this.setState({ items });
      });
  }

  renderLists = () => {
    console.log(this.state.items);
    let arr = [];
    if (this.state.items) {
      this.state.items.map(order => {
        arr.push(
          <ListGroup.Item>
            {order.seatNumber}: {order.order}
          </ListGroup.Item>
        );
      });
    }
    return arr;
  };

  renderPage = () => {
    if (currentUser === "passenger") {
      return (
        <div>
          <h1>Make requests to the flight attendants</h1>
          <div className="Orders">{this.renderCards()}</div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Passenger Requests</h1>
          <ListGroup className="List">{this.renderLists()}</ListGroup>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Navi />
        {this.renderPage()}
      </div>
    );
  }
}

export default withRouter(Attendant);
