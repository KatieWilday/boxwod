import React from "react"
import SignUpForm from './SignUpForm'

class Results extends React.Component {
  render() {
    return (
      <div className='results'>
        <h1>Add your results:</h1>
        <SignUpForm />
      </div>
    )
  }
}
export default Results
