import React from 'react';
import PropTypes from "prop-types";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


import TagFacesRounded from '@material-ui/icons/TagFacesRounded';
import Refresh from '@material-ui/icons/Refresh';
import Button from '@material-ui/core/Button';

const GamePanel = ({resetGame, solveGame, difficulty, difficultyOnChange}) => (
    <React.Fragment>
        <div id="gamePanel">
            <FormControl component="fieldset" className="">
                <FormLabel component="legend">Difficult level</FormLabel>
                <RadioGroup
                    aria-label="difficulty"
                    name="difficulty"
                    className={"listaRadios"}
                    value={difficulty}
                    onChange={difficultyOnChange}
                >
                    <FormControlLabel value="10" control={<Radio />} label="Easy" />
                    <FormControlLabel value="30" control={<Radio />} label="Medium" />
                    <FormControlLabel value="40" control={<Radio />} label="Hard" />
                    <FormControlLabel value="55" control={<Radio />} label="Expert" />
                </RadioGroup>
            </FormControl>
            <Button variant="contained" color="secondary" className="btn waves-effect waves-light" onClick={resetGame}>
                New Game
                <Refresh className="right" />
            </Button>

            <Button variant="contained" color="secondary" className="btn waves-effect waves-light" onClick={solveGame}>
                Solve
                <TagFacesRounded className="right" />
            </Button>
        </div>
    </React.Fragment>
);
GamePanel.prototype = {
    resetGame: PropTypes.func.isRequired,
    solveGame: PropTypes.func.isRequired,
    difficultyOnChange: PropTypes.func.isRequired,
    difficulty: PropTypes.string.isRequired
}
export default GamePanel;