import React, { Component } from "react";
import ShopCard from "../../ui/ShopCard/shopCard";
import Navi from "../../ui/Navi/navi";
import { withRouter } from "react-router-dom";
import "./shop.css";
import perfume1 from "../../../img/perfume1.jpg";
import perfume2 from "../../../img/perfume2.jpg";

const options = [
  {
    title: "Versace Bright Crystal",
    price: 65.0,
    description: "3.0oz/90mL Eau de Toilette Spray for women.",
    image: perfume1,
    dropdown: "snacks"
  },
  {
    title: "CK Be",
    price: 40.0,
    description: "6.7oz/200mL Eau de Toilette Spray for men.",
    image: perfume2
  }
];

class Shop extends Component {
  renderCards = () => {
    let arr = [...options];

    return arr.map(app => (
      <ShopCard
        title={app.title}
        description={app.description}
        price={app.price}
        image={app.image}
      />
    ));
  };

  render() {
    return (
      <div>
        <Navi />
        <h1>In-Flight Shopping</h1>
        <div className="Orders">{this.renderCards()}</div>
      </div>
    );
  }
}

export default withRouter(Shop);
