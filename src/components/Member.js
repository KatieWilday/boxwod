import React from "react"

function Member(props) {
  return (
        <div>
            <h3>Name: {props.memberFirstName}</h3>
            <h3 style={{display: !props.backSquat && "none"}}>Back Squat: {props.backSquat}</h3>
            <hr/>
        </div>
    )
}
export default Member
