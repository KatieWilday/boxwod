import React from 'react'
import { Link } from 'react-router-dom'
import lifter from '../lifter.jpg';
// import NavBar from './NavBar';


class Header extends React.Component {
  render() {
    return (
        <div className="container-fluid App-header">
          <div className="row">
            <img src={lifter} className="App-logo" alt="logo" />
          </div>
          <div className="row">
            <h2>Welcome to the boxWOD!</h2>
          </div>
        </div>
    )
  }
}
export default Header;