import React, { Component, } from 'react';

import { FormControl, FormGroup, ControlLabel, } from 'react-bootstrap';

class ArrayParameter extends Component {
    render() {
        let getValue = this.props.getValue;
        
        const { param, } = this.props;

        let inputs = [0, 1, 2].map((pIdx) =>
            <FormGroup key={pIdx}>
                <ControlLabel>{param.name + ' ' + pIdx}</ControlLabel>
                <FormControl 
                    type='text' 
                    name={param.name + '_' + pIdx} 
                    onChange={this.props.onChange} 
                    value = {getValue(param.name + '_' + pIdx)}
                />
            </FormGroup>);

        return (<div>{inputs}</div>);
    }
}

export default ArrayParameter;
