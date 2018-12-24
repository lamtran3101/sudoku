import React from 'react';
import PropTypes from "prop-types";
import CellContainer from '../container/CellContainer';


const Game = ({gameBoard, initGameBoard, updateGameboard, getCellStatus}) => (
    <React.Fragment>

        <div id="sudoku-game">
            <span className="line hr-line" />
            <span className="line hr-line" />
            <span className="line vr-line" />
            <span className="line vr-line" />
        {
            gameBoard.length !== 0 ? (
            initGameBoard.map((list, rowId) => (
                list.map((numero, colId) => (
                    <CellContainer getCellStatus={getCellStatus} key={"cell-" + rowId + "-"+colId}  numero={gameBoard[rowId][colId]} type={numero} rowId={rowId} colId={colId} updateGameboard={updateGameboard}/>
                ))
            ))) : (
                <div id="sudoku-init">
                    Please click button below to start new game.
                </div>
            )
        }
        </div>

    </React.Fragment>
);

Game.prototype = {
    initGameBoard: PropTypes.array.isRequired,
    gameBoard: PropTypes.array.isRequired,
    getCellStatus: PropTypes.func.isRequired,
    updateGameboard: PropTypes.func.isRequired
}

export default Game;