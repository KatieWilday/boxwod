import React from 'react'
import { Link } from 'react-router-dom'


class NavBar extends React.Component {
  render() {
    return (
      <div className = 'Nav-wrapper'>
          <div className = 'Nav-links-wrapper'>
              <Link to = '/' className = 'Nav-link' activeClassName = 'Active-link'> Home </Link>
              <Link to ='/addResults' className='Nav-link'> Add Results </Link>
          </div>
      </div>
    )
  }
}
export default NavBar;
