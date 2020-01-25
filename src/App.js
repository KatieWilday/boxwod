
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import LogIn from "./components/LogIn";

export default class App extends Component {
constructor() {
  super();

  this.state = {
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  };

  this.handleLogin = this.handleLogin.bind(this);
  this.handleLogout = this.handleLogout.bind(this);
}

checkLoginStatus() {
  axios
    .get("http://localhost:3001/logged_in", { withCredentials: true })
    .then(response => {
      if (
        response.data.logged_in &&
        this.state.loggedInStatus === "NOT_LOGGED_IN"
      ) {
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        });
      } else if (
        !response.data.logged_in &
        (this.state.loggedInStatus === "LOGGED_IN")
      ) {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        });
      }
    })
    .catch(error => {
      console.log("check login error", error);
    });
}

componentDidMount() {
  this.checkLoginStatus();
}

handleLogout() {
  this.setState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {}
  });
}

handleLogin(data) {
  this.setState({
    loggedInStatus: "LOGGED_IN",
    user: data.user
  });
}

render() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={"/"}
            render={props => (
              <Home
                {...props}
                handleLogin={this.handleLogin}
                handleLogout={this.handleLogout}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />
          <Route
            exact
            path={"/dashboard"}
            render={props => (
              <LogIn
                {...props}
                loggedInStatus={this.state.loggedInStatus}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
}

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
// import Home from './components/Home'
// import Header from './components/Header'
// import membersData from './membersData'
// import Member from './components/Member'
// import Results from './components/Results'
// import CurrentWorkout from './components/CurrentWorkout'
// import Whiteboard from './components/Whiteboard'
// import PerformanceHistory from './components/PerformanceHistory'
// import LogIn from './components/LogIn'
// import SignUp from './components/SignUp'



// function App() {
//   const memberComponents = membersData.map(member => <Member key={member.id} memberFirstName={member.memberFirstName} backSquat={member.backSquat}/>)
//
//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <Route exact path="/" component={Home} />
//         <Route path="/addResults" component={Results} />
//         <Route path="/currentworkout" component={CurrentWorkout} />
//         <Route path="/whiteboard" component={Whiteboard} />
//         <Route path="/performancehistory" component={PerformanceHistory} />
//         <Route path="/login" component={LogIn} />
//         <Route path="/signup" component={SignUp} />
//       </div>
//     </Router>
//
//   );
// }

//export default App;
