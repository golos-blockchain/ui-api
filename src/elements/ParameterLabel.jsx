import React, { Component } from 'react';

import { ControlLabel,
    Glyphicon, OverlayTrigger, Popover, } from 'react-bootstrap';

import { getDesc, } from '../utils/helpers';
import './ParameterLabel.css';

class ParameterLabel extends Component {

    render() {
        const { title, param, } = this.props;
        const desc = getDesc(param.desc);

        let content = title;
        if (desc) {
            content = (<OverlayTrigger trigger='click' rootClose overlay={ <Popover id='popover-positioned-right' title={title}>
                    <div dangerouslySetInnerHTML={{ __html: desc }}>
                    </div>
                </Popover>}>
                <span>{title}
                <Glyphicon glyph='question-sign' />
                </span>
            </OverlayTrigger>);
        }

        return (
            <ControlLabel bsClass={'control-label parameter-label' + (desc ? ' clickable' : '')}>
                {content}
            </ControlLabel>);
    }
}

export default ParameterLabel;
