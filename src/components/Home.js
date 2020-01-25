import React from "react"
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import TodaysDate from './TodaysDate'
import CurrentWorkout from './CurrentWorkout'
import LogIn from './LogIn'
import axios from "axios"
import SignUp from './SignUp'

export default class Home extends React.Component {
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

  render (){
    return (
      <div class='Hcontainer-fluid App-header'>
          <div class='App-header'>
            <h3><Link to = '/previous_wod' className = 'previous-link' activeClassName = 'Active-link'>Previous WOD</Link>
            <h2><TodaysDate /></h2>
            <h2><CurrentWorkout /></h2>
            <Link to = '/next_wod' className = 'next-link' activeClassName = 'Active-link'>Next WOD</Link></h3>
          </div>
      </div>
    );
  }
}
