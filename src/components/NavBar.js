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
        <button> <Link to = '/login'>Log In</Link></button>
        <button> <Link to = '/'>Today's WOD</Link></button>
        <button> <Link to = '/classschedule'>Class Schedule</Link></button>
        <button> <Link to = '/addresults'>Add Results</Link></button>
        <button> <Link to = '/whiteboard'>Whiteboard</Link></button>
        <button> <Link to = '/performancehistory'>Performance History</Link></button>
        <button> <Link to = '/settings'>Settings</Link></button>
      </div>
    );
  }
}

export default NavBar
