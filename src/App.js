import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import membersData from './membersData'
import Member from './components/Member'
import Results from './components/Results'
import CurrentWorkout from './components/CurrentWorkout'
import Whiteboard from './components/Whiteboard'
import PerformanceHistory from './components/PerformanceHistory'

function App() {
  const memberComponents = membersData.map(member => <Member key={member.id} memberFirstName={member.memberFirstName} backSquat={member.backSquat}/>)

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/addResults" component={Results} />
        <Route path="/currentworkout" component={CurrentWorkout} />
        <Route path="/whiteboard" component={Whiteboard} />
        <Route path="/performancehistory" component={PerformanceHistory} />
      </div>
    </Router>

  );
}

export default App;
