import auth0 from "auth0-js";

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: "jdr-cmpe172.auth0.com",
    clientID: "pgWo0DcxvaUb3X2va29yIEVWIQuidmkG",
    redirectURL: "http://localhost:3001/home",
    audience: "https://jdr-cmpe172.auth0.com/userinfo",
    responseType: "token id_token",
    scope: "openid"
  });

  constructor() {
    this.login = this.login.bind(this);
  }

  login() {
    this.auth0.authorize();
  }
}
