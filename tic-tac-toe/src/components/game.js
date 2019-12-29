import React from 'react';
import Board from './board';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>TODO: Insert game status here</div>
        </div>
      </div>
    );
  }
}

export default Game;
