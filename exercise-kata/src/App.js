import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './components/game/game'

class App extends Component {
  render() {
      return (
          <div className="App">
              <h1>Tic-Tac-Toe!</h1>
              <Game/>
              
          </div>
      );
  }
}

export default App;

