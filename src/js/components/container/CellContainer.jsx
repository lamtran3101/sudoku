import React, {Component} from "react";
import Cell from '../presentational/Cell';
import Input from "../presentational/Input";

class CellContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updateGameboard: props.updateGameboard,
            numero: props.numero,
            rowId: props.rowId,
            colId: props.colId,
            status: 0,
            type: props.type
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        const {numero, updateGameboard, rowId, colId} = this.state
        var reg = new RegExp(/[1-9]{1}/);
        if(reg.test(value)) {
            updateGameboard(rowId, colId, value);
        } else if (value === "" && numero !== 0) {
            updateGameboard(rowId, colId, 0);
        }
    }

    render() {
        const {rowId, colId, numero, type} = this.state;
        return (
            type === 0 ? (
                <Input rowId={rowId} colId={colId} numero={numero === 0 ? "" : numero} handleChange={this.handleChange}/>
            ) : (
                <Cell rowId={rowId} colId={colId} numero={numero} type={type}/>
            )
        );
    }
}

export default CellContainer;
