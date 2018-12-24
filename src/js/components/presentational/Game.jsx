import React from 'react';
import PropTypes from "prop-types";
import CellContainer from '../container/CellContainer';

const Game = ({gameBoard, initGameBoard, resetGame, updateGameboard}) => (
    <div>
        <label>Sudoku Game</label>
        <div id="sudoku-game">
            <span className="line hr-line" />
            <span className="line hr-line" />
            <span className="line vr-line" />
            <span className="line vr-line" />
        {

            initGameBoard.map((list, rowId) => (
                list.map((numero, colId) => (
                    <CellContainer key={"cell-" + rowId + "-"+colId}  numero={gameBoard[rowId][colId]} type={numero} rowId={rowId} colId={colId} updateGameboard={updateGameboard}/>
                ))
            ))
        }
        </div>
        <div id="game-actions">
            <button className="btn waves-effect waves-light" type="submit" name="action">Solve
                <i className="material-icons right">tag_faces</i>
            </button>
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={resetGame}>New Game
                <i className="material-icons right">refresh</i>
            </button>
        </div>
    </div>
);

Game.prototype = {
    initGameBoard: PropTypes.array.isRequired,
    gameBoard: PropTypes.array.isRequired,
    resetGame: PropTypes.func.isRequired,
    updateGameboard: PropTypes.func.isRequired
}

export default Game;