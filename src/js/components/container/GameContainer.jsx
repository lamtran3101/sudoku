import React, { Component } from "react";
import Game from '../presentational/Game';
const { SudokuSolver } = require('@jlguenego/sudoku-generator');

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GamePanelContainer from '../container/gamePanelContainer';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameBoard : [],
            initGameBoard : [],
            solution : [],
            solutionkey : "",
            difficulty : "10",
        };

        this.updateDifficulty = this.updateDifficulty.bind(this);
        this.isGameFinished = this.isGameFinished.bind(this);
        this.getCellStatus = this.getCellStatus.bind(this);
        this.updateGameboard = this.updateGameboard.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.solveGame = this.solveGame.bind(this);
    }
    updateDifficulty(difficulty) {
        this.setState({
            difficulty: difficulty
        })
    }


    updateGameboard(rowIndex, colIndex, numero) {
        const {gameBoard, solution} = this.state;
        const oldValue = gameBoard[rowIndex][colIndex];
        numero =  parseInt(numero);
        if(oldValue !== numero) {
            gameBoard[rowIndex][colIndex] = numero;
        }
        if(this.isGameFinished(gameBoard)) {
            alert("You Won");
            this.setState({
                gameBoard: gameBoard,
                initGameBoard: gameBoard
            })
        } else {
            this.setState({
                gameBoard: gameBoard,
            })
        }
    }

    getCellStatus(rowId, colId, numero) {
        const {gameBoard} = this.state;
        return GameContainer.validateCell(gameBoard, rowId, colId, numero);
    }

    static validateCell(gameBoard, rowId, colId, numero) {
        if(numero === 0) return 0;
        if(GameContainer.validateRow(gameBoard, rowId, colId, numero) === -1) {
            return -1;
        }
        if(GameContainer.validateCol(gameBoard, rowId, colId, numero) === -1) {
            return -1;
        }
        if(GameContainer.validateBigCell(gameBoard, rowId, colId, numero) === -1) {
            return -1;
        }
        return 0;
    }

    static validateRow(gameBoard, rowId, colId, numero) {
        const arr = gameBoard[rowId];
        var status = 0;
        arr.forEach(function(num, colIndex){
            if(num === numero && colIndex !== colId) status = -1;
        })
        return status;
    }

    static validateCol(gameBoard, rowId, colId, numero) {
        const arr = gameBoard.map( (list) => list[colId]);
        var status = 0;
        arr.forEach(function(num, rowIndex){
            if(num ===numero && rowIndex !== rowId) status = -1;
        })
        return status;
    }

    static validateBigCell(gameBoard, rowId, colId, numero) {
        const minRow = Math.floor(rowId / 3) * 3;
        const maxRow = Math.floor((rowId / 3)  + 1) * 3;
        const arrRows = gameBoard.filter( (list, rowIndex) => rowIndex >= minRow && rowIndex < maxRow);
        const minCol = Math.floor(colId / 3) * 3;
        const maxCol = Math.floor((colId / 3)  + 1) * 3;
        var arr = [];
        var status = 0;
        arrRows.forEach( function(list){
            list.forEach(function(num, colIndex){
                if(colIndex >= minCol && colIndex < maxCol) {
                    arr.push(num);
                }
            })
        });
        var count  = 0;
        arr.forEach(function(num){
            if(num ===numero) count++;
        })
        if(count > 1) {
            status = -1;
        }
        return status;
    }

    isGameFinished(gameBoard) {
        const {solutionkey} = this.state;
        const currentKey = gameBoard.reduce( (values, list) => {
            values = values + list.join("");
            return values;
        }, "")

        return solutionkey === currentKey;
    }

    solveGame(){
        let {solution} = this.state;
        this.setState({
            gameBoard : solution,
        });
    }

    resetGame() {
        let {difficulty} = this.state;
        const solution = SudokuSolver.generate();
        const grid = SudokuSolver.carve(solution, parseInt(difficulty));
        const solutionkey = solution.reduce( (values, list) => {
            values = values + list.join("");
            return values;
        }, "")

        this.setState({
            initGameBoard : grid.map(function(arr) {
                return arr.slice();
            }),
            gameBoard : grid,
            solution : solution,
            solutionkey : solutionkey,
            nav : false
        });
    }

    render() {
        const { gameBoard, initGameBoard, difficulty } = this.state;
        const gameKey = gameBoard.reduce( (values, list) => {
            values = values + list.join("");
            return values;
        }, "")
        return (
            <React.Fragment>
                <AppBar position="static">
                    <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit" className="logo">
                            My Sudoku
                        </Typography>
                        <IconButton className="" color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className="info">
                    <h1>Sudoku Game</h1>
                </div>
                <div id="game-layout">
                    <div id="game-layout-content">
                    <Game key={gameKey} getCellStatus={this.getCellStatus} gameBoard={gameBoard}  initGameBoard={initGameBoard} updateGameboard={this.updateGameboard}/>
                    </div>
                    <GamePanelContainer resetGame={this.resetGame} solveGame={this.solveGame} difficulty={difficulty} updateDifficulty={this.updateDifficulty}/>
                </div>

            </React.Fragment>
        );
    }
}

export default GameContainer;
