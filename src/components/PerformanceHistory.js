import React from "react"
import { Link } from "react-router-dom"

class PerformanceHistory extends React.Component {
  render() {
    return (
      <div className='performance'>
        <p><Link to = '/gymnastics'>Gymnastics</Link></p>
        <p><Link to = '/lifting'>Lifting</Link></p>
        <p><Link to = '/metcon'>Metcon</Link></p>
        <p><Link to = '/addworkout'>Add</Link></p>
        <p>Dropdown menu with different components</p>
      </div>
    )
  }
}
export default PerformanceHistory
