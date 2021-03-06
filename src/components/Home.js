import React, { Component } from "react"
import { Link } from 'react-router-dom'
//import NavBar from './NavBar'
import LogIn from './LogIn'
import axios from "axios"
import SignUp from './SignUp'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleSuccessfulAuth(data) {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  handleLogoutClick() {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <button onClick={() => this.handleLogoutClick()}>Logout</button>
        <SignUp handleSuccessfulAuth={this.handleSuccessfulAuth} />
        <LogIn handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}
