import React, { Component } from "react";
import Cell from '../presentational/Cell';

class CellContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numero: props.numero,
            cellId: props.cellId
        };
    }

    render() {
        const { cellId, numero } = this.state;
        return (
            <Cell cellId={cellId} numero={numero} />
        );
    }
}

export default CellContainer;
