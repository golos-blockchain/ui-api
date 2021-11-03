import React, { Component, } from 'react';

import { FormControl, FormGroup, HelpBlock, } from 'react-bootstrap';

import ParameterLabel from './ParameterLabel';

class ObjectParameter extends Component {
    constructor() {
        super();
        this.state = { error: null, };
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.value;

        try {
            this.props.onChange(event);
            JSON.parse(value);
            if (this.state.error) {
                this.setState({ error: null, });
            }
        } catch(e) {
            this.setState({ error: e.toString(), });
        }
    };

    render() {
        let getValue = this.props.getValue;

        let { param, } = this.props;

        let error = null;
        if (this.state.error) {
            error = <div className='Parameter-error'>
                {this.state.error}
            </div>;
        }

        return (<FormGroup>
            <ParameterLabel title={param.disp_name} param={param} />
            <FormControl componentClass='textarea' 
                name={param.name} 
                placeholder={param.default}
                maxRows={5} 
                onChange={this.onChange} 
                value={getValue(param.name)}>
            </FormControl>
            {error && <HelpBlock>{error}</HelpBlock>}
        </FormGroup>);
    }
}

export default ObjectParameter;
