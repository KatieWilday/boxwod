import React from "react"
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export default () =>
    <div class='Hcontainer-fluid App-header'>
        <div class='App-header'>
          <h3><Link to = '/previous_wod' className = 'previous-link' activeClassName = 'Active-link'>Previous WOD</Link>
          <h2>Today's Date</h2>
          <h2>Current Workout</h2>
          <Link to = '/next_wod' className = 'next-link' activeClassName = 'Active-link'>Next WOD</Link></h3>
        </div>
          <div class='Home-body'>
          </div>
        <div>
        </div>
    </div>
