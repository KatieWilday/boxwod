import React from "react"
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import TodaysDate from './TodaysDate'
import CurrentWorkout from './CurrentWorkout'

export default () =>
    <div class='Hcontainer-fluid App-header'>
        <div class='App-header'>
          <h3><Link to = '/previous_wod' className = 'previous-link' activeClassName = 'Active-link'>Previous WOD</Link>
          <h2><TodaysDate /></h2>
          <h2><CurrentWorkout /></h2>
          <Link to = '/next_wod' className = 'next-link' activeClassName = 'Active-link'>Next WOD</Link></h3>
        </div>
          <div class='Home-body'>
          </div>
        <div>
        </div>
    </div>
