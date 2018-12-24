import React from 'react';
import {render} from 'react-dom';
import GameContainer from './src/js/components/container/GameContainer';



const index = document.getElementById("sudoku-app");
if(index) {
    render(<GameContainer/>, index)
}

