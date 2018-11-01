import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoardContainer from './Gameboard/BoardContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to the Game of Life.
          </p>
          <a
            className="App-link"
            href = "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about Conway's Game of Life.
          </a>
          <div><BoardContainer /></div>
          
        </header>
      </div>
    );
  }
}

export default App;
