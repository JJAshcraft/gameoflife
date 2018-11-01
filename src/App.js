import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardContainer from './Gameboard/BoardContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to the Game of Life.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div><BoardContainer /></div>
          
        </header>
      </div>
    );
  }
}

export default App;
