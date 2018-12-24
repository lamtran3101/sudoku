import React from 'react';
import PropTypes from "prop-types";

const Input = ({rowId, colId, numero, handleChange, handleFocus, status}) => (
    <div id={"cell-" + rowId + "-" + colId} className={"cell hvr-fade " + (status !== -1 ? "" : "error")}>
        <div className="cell-content">
            <div className="numero numero-input">
                <input
                       id={"cell-input-" + rowId + "-" + colId}
                       value={numero}
                       onChange={handleChange} onFocus={handleFocus} maxLength={1} type="text"/>
            </div>
        </div>
    </div>
);

Input.prototype = {
    numero: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleFocus: PropTypes.func.isRequired,
    rowId: PropTypes.number.isRequired,
    colId: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired,
}

export default Input;