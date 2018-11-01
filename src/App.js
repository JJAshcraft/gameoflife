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
            Welcome to Conway's Game of Life
          </p>
          <a
            className="App-link"
            href = "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Rules"
            target="_blank"
            rel="noopener noreferrer"
          >
            The Rules
          </a><br/>
          <div><BoardContainer /></div>
          <br/>
          < a
        className = "App-link"
        href = "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life#Origins"
        target = "_blank"
        rel = "noopener noreferrer" >
          A Brief History of The Game </a>
        </header>
        
      </div>
    );
  }
}

export default App;
