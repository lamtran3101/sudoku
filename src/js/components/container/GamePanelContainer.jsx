import React, { Component } from "react";
import GamePanel from "../presentational/GamePanel";

class gamePanelContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resetGame : props.resetGame,
            solveGame : props.solveGame,
            difficulty : props.difficulty,
            updateDifficulty : props.updateDifficulty,
        };
        this.difficultyOnChange = this.difficultyOnChange.bind(this);
    }

    difficultyOnChange(event) {
        const value = event.target.value;
        this.setState({
            difficulty : value
        })
        this.state.updateDifficulty(value);
    }

    render() {
        const { resetGame,solveGame,  difficulty } = this.state;
        return (
            <GamePanel resetGame={resetGame} solveGame={solveGame} difficulty={difficulty} difficultyOnChange={this.difficultyOnChange}/>
        );
    }
}

export default gamePanelContainer;
