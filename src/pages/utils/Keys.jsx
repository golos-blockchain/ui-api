import React from 'react'
import { Grid, Row, Col, Panel, FormControl, ControlLabel, } from 'react-bootstrap'

import Header from '../../elements/Header'

import { auth } from 'golos-lib-js'
import { key_utils } from 'golos-lib-js/lib/auth/ecc'

class Keys extends React.Component {
    constructor() {
        super()
        this.state = {
            priv: key_utils.get_random_key().toWif(),
            pub: '',
            error: ''
        }
    }

    onPrivateChange = (e) => {
        const priv = e.target.value
        let pub = this.state.pub
        let error = ''
        try {
            pub = auth.wifToPublic(priv)
        } catch (err) {
            console.error(err)
            error = 'Неверный приватный ключ. Ошибку см. в логах'
        }
        this.setState({
            priv,
            pub,
            error
        })
    }

    onPublicChange = (e) => {
        const pub = e.target.value
        let pub0
        let error = ''
        try {
            pub0 = auth.wifToPublic(this.state.priv)
        } catch (err) {
            console.error(err)
            error = 'Неверный приватный ключ. Ошибку см. в логах'
        }
        if (pub0 && pub0 !== pub) {
            error = 'Ключи не соответствуют'
        }
        this.setState({
            pub,
            error
        })
    }

    render() {
        document.title = 'Golos-JS Utils'
        return (<Grid>
            <Row>
                <Col lg='12'>
                    <Header title='API' {...this.props} />
                </Col>
            </Row>
            <Row>
                <Col lg='12'>
                    <Panel bsStyle='primary'>
                        <Panel.Heading>
                            <Panel.Title>
                                Ключи и пароли
                            </Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <ul>
                                <li>Генерирует ключи - просто обновите страницу.</li>
                                <li>Вставьте приватный ключ, чтобы увидеть соответствующий ему публичный.</li>
                                <li>Вставьте приватный и публичный ключ, чтобы проверить их взаимное соответствие.</li>
                            </ul>
                            <ControlLabel>
                                Приватный ключ:
                            </ControlLabel>
                            <FormControl 
                                type='text' 
                                name='priv'
                                onChange={this.onPrivateChange}
                                value={this.state.priv}
                            />
                            <ControlLabel style={{ marginTop: '1rem' }}>
                                Публичный ключ:
                            </ControlLabel>
                            <FormControl 
                                type='text' 
                                name='pub'
                                onChange={this.onPublicChange}
                                value={this.state.pub}
                            />
                            <div style={{ color: 'red', marginTop: '1rem' }}>
                                {this.state.error}
                            </div>
                        </Panel.Body>
                    </Panel>
                </Col>
            </Row>
        </Grid>)
    }
}

export default Keys
