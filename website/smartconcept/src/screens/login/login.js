import React, { Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl, Glyphicon, InputGroup, Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

import './style.css';
import { AuthService } from "./../../services/authService";
import InputalidationMessage from './../../components/inputalidationMessage';

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class Login extends Component {

    constructor(props){
        super(props);
        this.state={
            emailAddr: '',
            password: '',
            errorMessage: '',
            redirectToReferrer: false
        }
    }
    getUserNameValidationState = () => {
        return emailReg.test(this.state.emailAddr) ? 'success' : 'error'
    }
    getPasswordValidationState = () => {
        return !this.state.password || this.state.password.length < 8 ? 'error' : 'success'
    }
    login = (event) => {
        this.setState({ errorMessage: '' });        
        event.preventDefault();
        AuthService.onLocalLogin({ emailAddr: this.state.email, password: this.state.password })
            .then((response) => {
                this.setState({
                    redirectToReferrer: true
                });
            })
            .catch((err) => this.setState(
                {
                    errorMessage: err.message || 'Unable to login'
                }
            ));
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <Row>
                <Col xs={12}>
                    <form onSubmit={this.login}>
                        <Row>
                            <Col xs={12}>
                                <FormGroup controlId="userName" validationState={this.getUserNameValidationState()}>
                                    <InputGroup className="login-input">
                                        <InputGroup.Addon><Glyphicon glyph="user" /></InputGroup.Addon>
                                        <FormControl type="text" placeholder="Email address" className="input-box" onChange={event => this.setState({emailAddr: event.target.value})}/>
                                    </InputGroup>
                                    <FormControl.Feedback />
                                </FormGroup>
                                <FormGroup controlId="password" validationState={this.getPasswordValidationState()}>
                                    <InputGroup className="login-input">
                                        <InputGroup.Addon><Glyphicon glyph="lock" /></InputGroup.Addon>
                                        <FormControl type="password" placeholder="Password" onChange={event => this.setState({password: event.target.value})}/>
                                    </InputGroup>
                                    <FormControl.Feedback />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row style={{display: 'block'}}>
                            <Col xs={8}/>
                            <Col xs={4} >
                                <Button type="submit">Done</Button>
                            </Col>
                            <Col xs={12}>
                                    <InputalidationMessage message={this.state.errorMessage} />
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        )
    }
}