import React, { Component } from "react";
import AppCard from "../../ui/AppCard/appCard";
import Navi from "../../ui/Navi/navi";
import "./home.css";

const passenger = [
  {
    title: "Games",
    description: "Play games by yourself or with other passenger",
    link: "/Games"
  },
  {
    title: "Movies",
    description: "Watch something to pass the time",
    link: "/Movies"
  },
  {
    title: "Shop",
    description: "Buy items from our in-flight catalogue",
    link: "/Shop"
  },
  {
    title: "Attendant",
    description:
      "Request food, drinks or assistance from the flight attendants",
    link: "/Attendant"
  }
];

const attendant = [
  {
    title: "Requests",
    description: "Attend to passenger requests",
    link: "/Requests"
  },
  {
    title: "Store",
    description: "Deliver Passenger purchases",
    link: "/Store"
  }
];

const marshall = [
  ...passenger,
  {
    title: "Manifest",
    description: "See who is on the flight",
    link: "/Manifest"
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
      <AppCard title={app.title} description={app.title} link={app.link} />
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
