import React, { Component } from "react";
import Game from '../presentational/Game';
const { SudokuSolver } = require('@jlguenego/sudoku-generator');


class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameBoard : props.grid,
            initGameBoard : props.grid.map(function(arr) {
                return arr.slice();
            }),
            solution : props.solution,
            solutionkey : props.solution.reduce( (values, list) => {
                values = values + list.join("");
                return values;
            }, "")
        };

        this.isGameFinished = this.isGameFinished.bind(this);
        this.updateGameboard = this.updateGameboard.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    componentDidMount() {
    }

    updateGameboard(rowIndex, colIndex, numero) {
        const {gameBoard, solution} = this.state;
        const oldValue = gameBoard[rowIndex][colIndex];
        if(oldValue !== numero) {
            gameBoard[rowIndex][colIndex] = numero;
        }
        if(this.isGameFinished(gameBoard)) {
            alert("You Won");
        }
        this.setState({
            gameBoard: gameBoard
        })
    }

    isGameFinished(gameBoard) {
        const {solutionkey} = this.state;
        const currentKey = gameBoard.reduce( (values, list) => {
            values = values + list.join("");
            return values;
        }, "")

        return solutionkey === currentKey;
    }

    resetGame() {
        const solution = SudokuSolver.generate();
        const grid = SudokuSolver.carve(solution, 2);
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
            solutionkey : solutionkey
        });
    }

    render() {
        const { gameBoard, initGameBoard } = this.state;
        const gameKey = gameBoard.reduce( (values, list) => {
            values = values + list.join("");
            return values;
        }, "")
        console.log(initGameBoard);
        return (
            <Game key={gameKey} gameBoard={gameBoard}  initGameBoard={initGameBoard} resetGame={this.resetGame} updateGameboard={this.updateGameboard}/>
        );
    }
}

export default GameContainer;
