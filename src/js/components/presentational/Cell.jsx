import React from 'react';
import PropTypes from "prop-types";

const Cell = ({rowId, colId, numero}) => (
    <div id={"cell-" + rowId + "-" + colId} className="cell hvr-fade">
        <div className="cell-content">
            <span className="numero">
                        {numero > 0 ? numero : ""}
                    </span>
        </div>


    </div>
);

Cell.prototype = {
    numero: PropTypes.number.isRequired,
    rowId: PropTypes.number.isRequired,
    colId: PropTypes.number.isRequired,
}

export default Cell;