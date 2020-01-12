import React from "react"
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

export default () =>
    <div class='Hcontainer-fluid App-header'>
        <div class='Home-header'>
          <h3><Link to = '/previous_wod' className = 'previous-link' activeClassName = 'Active-link'>Previous WOD</Link></h3>
          <h3><Link to = '/next_wod' className = 'next-link' activeClassName = 'Active-link'>Next WOD</Link></h3>
          <h1>Today's Date</h1>
            <h2>Current Workout</h2>
        </div>
          <div class='Home-body'>
          </div>
        <div>
        </div>
    </div>
