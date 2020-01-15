import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Home from './Home'
import Results from './Results'
import CurrentWorkout from './CurrentWorkout'
import Whiteboard from './Whiteboard'

class NavBar extends Component {
  render() {
    return (
      <div className="menu-links">
        <Link to = '/login' className="menu-links">Log In</Link>
        <Link to = '/' className="menu-links">Today's WOD</Link>
        <Link to = '/classschedule' className="menu-links">Class Schedule</Link>
        <Link to = '/addresults' className="menu-links">Add Results</Link>
        <Link to = '/whiteboard' className="menu-links">Whiteboard</Link>
        <Link to = '/performancehistory' className="menu-links">Performance History</Link>
        <Link to = '/settings' className="menu-links">Settings</Link>
      </div>
    );
  }
}

export default NavBar
