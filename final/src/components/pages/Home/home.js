import React, { Component } from "react";
import AppCard from "../../ui/AppCard/appCard";
import Navi from "../../ui/Navi/navi";
import "./home.css";
import game from "../../../img/game.jpg";

const passenger = [
  {
    title: "Games",
    description: "Play games by yourself or with other passenger",
    link: "/games",
    image: { game }
  },
  {
    title: "Movies",
    description: "Watch something to pass the time",
    link: "/movies"
  },
  {
    title: "Shop",
    description: "Buy items from our in-flight catalogue",
    link: "/shop"
  },
  {
    title: "Attendant",
    description:
      "Request food, drinks or assistance from the flight attendants",
    link: "/attendant"
  },
  {
    title: "Twitter",
    description: "Tweet about your flight",
    link: "/twitter"
  }
];

const attendant = [
  {
    title: "Requests",
    description: "Attend to passenger requests",
    link: "/requests"
  },
  {
    title: "Orders",
    description: "Deliver Passenger purchases",
    link: "/orders"
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

class Home extends Component {
  renderCards = () => {
    let arr = [...passenger];
    //get current user information
    /*
    if(current user === passenger){
    arr = [...attendant]
    }
    else if(current user === attendant){
    arr = [...marshall]
    }
    */

    return arr.map(app => (
      <AppCard
        title={app.title}
        description={app.description}
        link={app.link}
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
