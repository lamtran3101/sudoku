import React from 'react';
import {render} from 'react-dom';
import GameContainer from './src/js/components/container/GameContainer';
const { SudokuSolver } = require('@jlguenego/sudoku-generator');



const index = document.getElementById("sudoku-app");
if(index) {
    const grid = SudokuSolver.generate();
    const grid2 = SudokuSolver.carve(grid, 55);

    render(<GameContainer grid={grid2} />, index)
}

