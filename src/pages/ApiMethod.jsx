import React, { Component, } from 'react';
import JSONPretty from 'react-json-pretty';
import queryString from 'query-string';
import JSON5 from 'json5';
import { utils, } from 'golos-lib-js';

import { Button, Panel, Grid, Col, Row, Tabs, Tab, } from 'react-bootstrap';

import SteemApi from '../steemjs/api';
import ApiMethodParameters from '../elements/ApiMethodParameters';
import Header from '../elements/Header';
import { getDesc, setLang, } from '../utils/helpers';
import './ApiMethod.css';

class ApiMethod extends Component {
    constructor(params) {
        super(params);
        this.steemapi = new SteemApi();
        this.state = {
            result: null,
            error: false,
            executing: false,
            blockchain: SteemApi.Blockchain.LEX,
            ws: null,
            gotParams: false,
            examplesLang: localStorage.getItem('examples.lang') || 'JSON-RPC',
            examplesJSNoAsync: !!localStorage.getItem('examples.js.noAsync'),
        };

        this.applyParameters();
    }

    /* eslint-disable react/no-direct-mutation-state */
    applyParameters() {
        let urlParams = queryString.parse(this.props.location.search);
        this.state.gotParams = Object.keys(urlParams).length > 0;
        console.log('assign', urlParams);
        Object.assign(this.state, urlParams);
        if (!this.state.ws) {
            if (!Object.keys(SteemApi.Blockchain).includes(this.state.blockchain)) {
                this.state.blockchain = SteemApi.Blockchain.LEX;
            }
            const defaults = SteemApi.getDefaults(this.state.blockchain);
            Object.assign(this.state, defaults);
        }
        console.log('applyParameter', this.props.location.search);
        console.log('applyParameter', this.state);
    }
    /* eslint-enable react/no-direct-mutation-state */

    onSelectLang = (countryCode) => {
        countryCode = countryCode.toLowerCase();
        switch (countryCode) {
        case 'gb':
            countryCode = 'en';
            break;
        default:
            break;
        }
        setLang(countryCode);
        //console.log('countryCode = ', countryCode);
        this.setState({ lang: countryCode, });
    };

    getParameterValues(showErrors=false) {
        let apiName = this.props.match.params.api_name;
        let methodName = this.props.match.params.method_name;
        let method = this.steemapi.methods[apiName][methodName];
        let params = [];
        if (method.params) {
            for (let pname of method.paramNames) {
                if (method.params[pname].type === 'Array') {
                    let value = [];
                    for (let i = 0; i < 5; i++) {
                        let pname_f = pname + '_' + i;
                        if (this.state[pname_f]) {
                            value.push(this.state[pname_f]);
                        }
                    }
                    params.push(value);
                } else if (method.params[pname].type === 'Object') {
                    let value = this.state[pname];
                    try {
                        if (value) {
                            value = JSON.parse(value);
                            params.push(value);
                        } else {
                            value = null;
                        }
                    } catch (e) {
                        value = null;
                    }
                } else {
                    if (this.state[pname]) {
                        params.push(this.state[pname]);
                    } else if (method.params[pname].default) {
                        let def = method.params[pname].default
                        def = def === '"by_symbol_name"' ? 'by_symbol_name' : def
                        params.push(def)
                    } else {
                        params.push('');
                    }
                }
            }
        }
        return params;
    }

    getApiCall() {
        let methodName = this.props.match.params.method_name;
        let apiName = this.props.match.params.api_name;
        let method = this.steemapi.methods[apiName][methodName];
        let params = this.getParameterValues();

/*
    {id: 8, method: "call", jsonrpc: "2.0", params: ["database_api", "get_accounts", [["ropox"]]]}
    id: 8
    jsonrpc: "2.0"
    method: "call"
    params: ["database_api", "get_accounts", [["ropox"]]]
*/

        return JSON.stringify({ id: 1, method: 'call', jsonrpc: '2.0', params: [
            method.api,
            method.name,
            params,
        ]});
    }

    getJSCall(withoutAsync = false) {
        let methodName = this.props.match.params.method_name;
        let params = this.getParameterValues();

        let apiName = this.props.match.params.api_name;
        let method = this.steemapi.methods[apiName][methodName];
        methodName = utils.camelCase(method.methodName || methodName);

        let jsParams = params.map(p => JSON5.stringify(p, null, 4));
        jsParams = jsParams.join(', ');
        jsParams = jsParams.split('\n').join('\n    ');

        const logging = 'console.log(err, res);\n';
        const loggingAsync = '    console.log(res);\n';

        let code = 'golos.api.' + methodName;
        if (!withoutAsync) code = 'let res;\ntry {\n    res = await ' + code + 'Async';
        code += '(' + jsParams;
        if (withoutAsync) {
            code += ', (err, res) => {\n';
            code += '    ' + logging;
            code += '}';
        }
        code += ');\n';
        if (!withoutAsync) {
            code += loggingAsync;
            code += '} catch (err) {\n';
            code += '    console.error(\'err\', err);\n';
            code += '}';
        }
        return code;
    }

    onExecute = (event) => {
        if (event) {
            //event.preventDefault();
        }
        console.log('set ws to', this.state.ws);
        SteemApi.setBlockchain(this.state.ws);

        let methodName = this.props.match.params.method_name;
        let apiName = this.props.match.params.api_name;
        let method = this.steemapi.methods[apiName][methodName];
        let params = this.getParameterValues();

        console.log('execute api method', method, params)
        method.execute.apply(method, params).then(
            result => {
                if (!result) {
                    result = { steemjsgui: 'empty result from blockchain', };
                }
                this.setState({ result: result, error: false, executing: false, });
            },
            error => {
                this.setState({ result: error, error: true, executing: false, });
            });

        this.setState({ result: null, error: false, executing: true, });
    };

    onChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        console.log('onChange', event)
        this.setState({
            [name]: value,
        });
    };

    onBlockchainChange = (values) => {
        console.log('onBlockchainChange', values);
        this.setState(values);
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    onExampleTabChange = (key) => {
        this.setState({
            examplesLang: key,
        });
        localStorage.setItem('examples.lang', key);
    };

    onJSAsyncToggle = (e) => {
        if (this.state.examplesJSNoAsync) {
            localStorage.removeItem('examples.js.noAsync');
            this.setState({ examplesJSNoAsync: '', });
        } else {
            localStorage.setItem('examples.js.noAsync', '1');
            this.setState({ examplesJSNoAsync: '1', });
        }
    };

    render() {
        let methodName = this.props.match.params.method_name;
        let apiName = this.props.match.params.api_name;
        let method = this.steemapi.methods[apiName][methodName];

        const { examplesLang, examplesJSNoAsync, } = this.state;

        document.title = 'Steem-JS API - ' + methodName;

        let result = '';
        if (this.state.result) {
            result = <JSONPretty id='json-pretty' json={this.state.result}></JSONPretty>;
        } else if (this.state.executing) {
            result = <img src='/steemjs02/assets/images/golosa64.gif' alt='' />;
        }

        if (!this.state.result && !this.state.executing && (!method.params || this.state.gotParams)) {
            this.onExecute();
        }

        return (<Grid>
            <form onSubmit={this.onExecute}>
                <input type='hidden' name='blockchain' value={this.state.blockchain} />
                <input type='hidden' name='ws' value={this.state.ws} />
                <Header 
                    title={apiName + ' / ' + methodName}
                    onChange={this.onBlockchainChange}
                    onSelectLang={this.onSelectLang}
                    blockchain={this.state.blockchain}
                    ws={this.state.ws}
                />

                <Row>
                <Col lg='12'>
                <Panel bsStyle='primary'>
                    <Panel.Heading>
                        <Panel.Title>
                            {methodName}
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <div dangerouslySetInnerHTML={{ __html: getDesc(this.steemapi.methods[apiName][methodName].desc) }}>
                        </div>
                    </Panel.Body>
                </Panel>
                </Col>
                </Row>

                <Row>
                <Col lg='12'>
                <Panel bsStyle='primary'>
                <Panel.Heading>
                    Parameters
                </Panel.Heading>
                <Panel.Body>
                    <ApiMethodParameters method={method} onChange={this.onChange} paramValues={this.state} />
                    <Button bsStyle='primary' type='submit' value='Execute' variant='raised' color='primary'>Execute</Button>
                </Panel.Body>
                </Panel>
                </Col>
                </Row>
            </form>

            <Panel bsStyle='primary'>
            <Panel.Heading>
                API запрос
            </Panel.Heading>                
            <Panel.Body>
                <Tabs activeKey={examplesLang}
                    id='examples'
                    animation={false}
                    onSelect={this.onExampleTabChange}>
                    <Tab eventKey='JSON-RPC' title='JSON-RPC'>
                        <pre>
                            {this.getApiCall()}
                        </pre>
                    </Tab>
                    <Tab eventKey='JavaScript' title='JavaScript'>
                        <input id='noasync' type='checkbox'
                            className='example-checkbox'
                            checked={!!examplesJSNoAsync}
                            onClick={this.onJSAsyncToggle}
                        />
                        <label htmlFor='noasync' className='example-checkbox-label'>
                            Without async
                        </label>
                        <pre>
                            {this.getJSCall(!!examplesJSNoAsync)}
                        </pre>
                    </Tab>
                </Tabs>
            </Panel.Body>
            </Panel>

            <Panel bsStyle='primary'>
            <Panel.Heading>
                Result
            </Panel.Heading>                
            <Panel.Body>
                {result}
            </Panel.Body>
            </Panel>
        </Grid>);
    }
}

export default ApiMethod;
