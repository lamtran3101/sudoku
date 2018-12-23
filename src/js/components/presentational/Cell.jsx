import React from 'react';
import PropTypes from "prop-types";

const Cell = ({cellId, numero}) => (
    <div id={"cell-" + cellId} className="cell hvr-fade">
        <span className="numero">
            {numero > 0 ? numero : ""}
        </span>
    </div>
);

Cell.prototype = {
    numero: PropTypes.number.isRequired
}

export default Cell;