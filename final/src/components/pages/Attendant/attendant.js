import React, { Component } from "react";
import AppCard from "../../ui/AppCard/appCard";
import Navi from "../../ui/Navi/navi";
import { withRouter } from "react-router-dom";
import "./attendant.css";
import steward from "../../../img/steward.png";
import snacks from "../../../img/snacks.jpg";
import drinks from "../../../img/drinks.jpg";

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

class Attendant extends Component {
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

  render() {
    return (
      <div>
        <Navi />
        <h1>Make requests to the flight attendants</h1>
        <div className="Orders">{this.renderCards()}</div>
      </div>
    );
  }
}

export default withRouter(Attendant);
