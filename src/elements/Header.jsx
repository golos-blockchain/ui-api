import React, { Component, } from 'react';
import 'react-flags-select/css/react-flags-select.css';

import { Navbar, Nav, NavDropdown, MenuItem, FormGroup, Glyphicon, FormControl, } from 'react-bootstrap';

import SteemApi from '../steemjs/api';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.steemapi = new SteemApi();
        this.state = {
            blockchain: this.props.blockchain,
            ws: this.props.ws,
        };
    }

    onSelectLang = (countryCode) => {
        this.props.onSelectLang(countryCode);
    };

    onChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log(name, value);
        let newState = {
            [name]: value,
        };
        if (name === 'blockchain') {
            const defaults = SteemApi.getDefaults(value);
            console.log('got defaults', defaults);
            Object.assign(newState, defaults);
        }

        this.setState(newState);

        if (this.props.onChange) {
            this.props.onChange({
                blockchain: this.state.blockchain,
                ws: this.state.ws,
            });
        }
    };

    onChangeBlockchain(blockchain) {
        const ws = SteemApi.getDefaults(blockchain).ws;
        this.setState({
            openBCSelector: null,
            blockchain,
            ws,
        });
        if (this.props.onChange) {
            this.props.onChange({
                blockchain, ws,
            });
        }        
    }

    onChangeWs(ws) {
        console.log('ws', ws);
        this.setState({ws});
        if (this.props.onChange) {
            this.props.onChange({
                blockchain: this.state.blockchain,
                ws: ws,
            });
        }        
    }

    render() {
        console.log('props & stats', this.props, this.state);
        console.log('state.blockchain', this.state.blockchain);
        return (<Navbar inverse>
            <Navbar.Header>
                {this.state.blockchain && <Navbar.Brand>
                    <a  href='../'><Glyphicon glyph='triangle-left'/></a>
                </Navbar.Brand>}

                <Navbar.Text>
                    {this.props.title}
                </Navbar.Text>
                <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
                {!this.state.blockchain && <Nav>
                    <NavDropdown title='Инструменты'>
                        <MenuItem href='/utils/keys'>Ключи и пароли</MenuItem>
                        <MenuItem href='https://explorer.golos.id' target='_blank' rel='noopener noreferrer'>Golos Explorer</MenuItem>
                        <MenuItem href='https://wiki.golos.id' target='_blank' rel='noopener noreferrer'>База знаний Golos</MenuItem>
                    </NavDropdown>
                </Nav>}
                {this.state.blockchain && <Navbar.Form pullRight style={{ marginRight: '5px', }}>
                    <FormGroup>
                    <FormControl onChange={(ev) => this.onChangeBlockchain(ev.target.value)}
                        componentClass='select' placeholder={this.state.blockchain}>
                        {Object.keys(SteemApi.Blockchain).map(node => 
                            <option selected={SteemApi.Blockchain[node] === this.state.blockchain} value={SteemApi.Blockchain[node]}>{SteemApi.Blockchain[node]}</option>
                        )}
                    </FormControl>  
                    </FormGroup>{' '}
                    <FormGroup>
                        <FormControl value={this.state.ws}
                            onChange={(ev) => this.onChangeWs(ev.target.value)}>
                        </FormControl>
                    </FormGroup>
                </Navbar.Form>}
            </Navbar.Collapse>
        </Navbar>);
    }
}

export default Header;
