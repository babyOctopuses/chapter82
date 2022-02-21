// import { } from "firebase/app";
import React, { Component } from "react";
import firebase from "../services/firebase";

export default class Register extends Component {
  state = {};
  set = (name) => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleRegister = (event) => {
    const { email, password } = this.state;
    event.preventDefault();
    if (!email || !password) {
      return alert("Please insert missing credentials!");
    }
    console.log(" firebase ", firebase);
    firebase.auth.createUserWithEmailAndPassword(email, password);
  };
  render() {
    return (
      <form onSubmit={this.handleRegister}>
        <input type="email" onChange={this.set("email")} />
        <input type="password" onChange={this.set("password")} />
        <input type="submit" />
      </form>
    );
  }
}
