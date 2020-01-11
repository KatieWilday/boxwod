import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
      </div>
    </Router>

  );
}

export default App;
