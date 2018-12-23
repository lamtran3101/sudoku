import React, { Component } from "react";
import Game from '../presentational/Game';
const { SudokuSolver } = require('@jlguenego/sudoku-generator');


class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameBoard: Array.from({length: 81}, () => Math.floor(Math.random() * 9)),
            grid : props.grid
        };
    }

    componentDidMount() {
        let {grid} = this.state;
        console.log(grid);
    }

    render() {
        const { gameBoard } = this.state;
        return (
            <Game gameBoard={gameBoard} />
        );
    }
}

export default GameContainer;
