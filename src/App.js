import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar></NavBar>
        <header className="App-header">
        <h2>Lapel Pins in React</h2>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
