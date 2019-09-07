import React from 'react';
import Board from '../Board/board'

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }
  
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board/>
        </div>
      </div>
    );
  }
}
