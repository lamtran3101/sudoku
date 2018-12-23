import React from 'react';
import PropTypes from "prop-types";
import CellContainer from '../container/CellContainer';

const Game = ({gameBoard}) => (
    <div>
        <label>Sudoku Game</label>
        <div id="sudoku-game">
            <span className="line hr-line" />
            <span className="line hr-line" />
            <span className="line vr-line" />
            <span className="line vr-line" />
        {
            gameBoard.map((numero, id) => (
                <CellContainer key={"cell-" + id}  numero={numero} cellId={id}/>
            ))
        }
        </div>
        <div id="game-actions">
            <button className="btn waves-effect waves-light" type="submit" name="action">Solve
                <i className="material-icons right">tag_faces</i>
            </button>
            <button className="btn waves-effect waves-light" type="submit" name="action">New Game
                <i className="material-icons right">refresh</i>
            </button>
        </div>
    </div>
);

Game.prototype = {
    gameBoard: PropTypes.array.isRequired
}

export default Game;