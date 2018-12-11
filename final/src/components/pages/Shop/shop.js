import React, { Component } from "react";
import ShopCard from "../../ui/ShopCard/shopCard";
import Navi from "../../ui/Navi/navi";
import { withRouter } from "react-router-dom";
import ListGroup from "react-bootstrap/lib/ListGroup";
import "./shop.css";
import perfume1 from "../../../img/perfume1.jpg";
import perfume2 from "../../../img/perfume2.jpg";
import firebase from "../../../firestore";
const db = firebase.firestore();

const options = [
  {
    title: "Versace Bright Crystal",
    price: 65,
    description: "3.0oz/90mL Eau de Toilette Spray for women.",
    image: perfume1,
    dropdown: "snacks"
  },
  {
    title: "CK Be",
    price: 40,
    description: "6.7oz/200mL Eau de Toilette Spray for men.",
    image: perfume2
  }
];

const currentUser = "attendant";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCards = () => {
    let arr = [...options];
    console.log(arr);
    return arr.map(app => (
      <ShopCard
        title={app.title}
        description={app.description}
        price={app.price}
        image={app.image}
      />
    ));
  };

  componentWillMount() {
    db.collection("Shop")
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
            {order.seatNumber}: {order.quantity}x {order.item}
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
          <h1>In-Flight Shopping</h1>
          <div>{this.renderCards()}</div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>In-Flight Shopping</h1>
          <div>
            <ListGroup className="List">{this.renderLists()}</ListGroup>
          </div>
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

export default withRouter(Shop);
