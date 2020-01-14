import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import membersData from './membersData'
import Member from './components/Member'
import Results from './components/Results'

function App() {
  const memberComponents = membersData.map(member => <Member key={member.id} memberFirstName={member.memberFirstName} backSquat={member.backSquat}/>)

  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/addResults" component={Results} />
      </div>
    </Router>

  );
}

export default App;
