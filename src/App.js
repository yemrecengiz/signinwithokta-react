import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouterAccess from './AppWithRouterAccess';
import Navbar from './components/layout/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
      <Navbar />
      <div className="container">
        <AppWithRouterAccess/></div>
      </Router>
    );
  }
}

export default App;