import React from 'react'
import { Link } from 'react-router-dom'
import lifter from '../lifter.png';
import NavBar from './NavBar';


class Header extends React.Component {
  render() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
      fontSize: 30
    }

    if (hours < 12) {
      timeOfDay = "Morning"
      styles.color = "teal"
    } else if (hours >= 12 && hours < 17) {
      timeOfDay = "Afternoon"
      styles.color = "yellow"
    } else {
      timeOfDay = "Evening"
      styles.color = "lightBlue"
    }

    return (
        <div className="App-header">
          <div className="row">
            <img src={lifter} className="App-logo" alt="logo" />
          </div>
          <div className="row">
            <header className="navbar" style={styles}>Good {` ${timeOfDay},`} Current User!</header>
          </div>
          <NavBar className="navbar"/>
        </div>
    )
  }
}
export default Header;
