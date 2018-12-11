import React, { Component } from "react";
import AppCard from "../../ui/AppCard/appCard";
import Navi from "../../ui/Navi/navi";
import "./home.css";
import game from "../../../img/game.jpg";
import twitter from "../../../img/twitter.png";
import shop from "../../../img/shop.png";
import steward from "../../../img/steward.png";
import movies from "../../../img/movies.jpg";

const passenger = [
  {
    title: "Games",
    description: "Play games by yourself or with other passenger",
    link: "/games",
    image: game
  },
  {
    title: "Movies",
    description: "Watch something to pass the time",
    link: "/movies",
    image: movies
  },
  {
    title: "Shop",
    description: "Buy items from our in-flight catalogue",
    link: "/shop",
    image: shop
  },
  {
    title: "Attendant",
    description:
      "Request food, drinks or assistance from the flight attendants",
    link: "/attendant",
    image: steward
  },
  {
    title: "Twitter",
    description: "Tweet about your flight",
    link: "/twitter",
    image: twitter
  }
];

const attendant = [
  {
    title: "Requests",
    description: "Attend to passenger requests",
    link: "/attendant",
    image: steward
  },
  {
    title: "Orders",
    description: "Deliver Passenger purchases",
    link: "/orders",
    image: shop
  }
];

const marshall = [
  ...passenger,
  {
    title: "Manifest",
    description: "See who is on the flight",
    link: "/manifest"
  }
];

const currentUser = "attendant";

class Home extends Component {
  renderCards = () => {
    //get current user information
    let arr = [];
    if (currentUser === "passenger") {
      arr = [...passenger];
    } else if (currentUser === "attendant") {
      arr = [...attendant];
    } else {
      arr = [...marshall];
    }

    return arr.map(app => (
      <AppCard
        title={app.title}
        description={app.description}
        link={app.link}
        image={app.image}
      />
    ));
  };

  render() {
    return (
      <div>
        <Navi />
        <div className="Apps">{this.renderCards()}</div>
      </div>
    );
  }
}

export default Home;
