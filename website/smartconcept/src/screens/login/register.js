import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl, Glyphicon, InputGroup, Button } from 'react-bootstrap';
import { Redirect } from "react-router-dom";

import './style.css';
import { AuthService } from "./../../services/authService";
import InputalidationMessage from './../../components/inputalidationMessage';

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function isNumeric(text) {
    var numbers = '0123456789';
    for (var i = 0; i < text.length; i++) {
        if (numbers.indexOf(text[i]) < 0) {
            return false;
        }
    }
    if (text.length !== 8) {
        return false;
    }
    return true;
}

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailAddr: '',
            password: '',
            passwordRetype: '',
            mobileNumber: '',
            errorMessage: '',
            redirectToReferrer: false
        }
    }
    getUserNameValidationState = () => {
        const emailAddr = this.state.emailAddr;
        return emailAddr === '' ? null : emailReg.test(emailAddr) ? 'success' : 'error';
    }
    getMobileNumberValidationState = () => {
        const mobileNumber = this.state.mobileNumber;
        return mobileNumber === '' ? null : isNumeric(mobileNumber) ? 'success' : 'error';
    }
    getPasswordValidationState = () => {
        const password = this.state.password;
        return password === '' ? null : password.length < 8 ? 'error' : 'success';
    }
    getPasswordRetypeValidationState = () => {
        const passwordRetype = this.state.passwordRetype;
        return passwordRetype === '' ? null : passwordRetype !== this.state.password ? 'error' : 'success';
    }

    hasError(callback) {
        return callback() !== 'success';
    }

    register = (event) => {
        this.setState({ errorMessage: '' });
        event.preventDefault();
        if (this.hasError(this.getUserNameValidationState) || this.hasError(this.getMobileNumberValidationState) || this.hasError(this.getPasswordValidationState) || this.hasError(this.getPasswordRetypeValidationState)) {
            this.setState(
                {
                    errorMessage: 'Please correct the above details'
                });
                return;
        }
        AuthService.onSignUp({ emailAddr: this.state.emailAddr, password: this.state.password, mobileNumber: this.state.mobileNumber })
            .then((response) => {
                this.setState({
                    redirectToReferrer: true
                });
            })
            .catch((err) => this.setState(
                {
                    errorMessage: err.message || 'Unable to register'
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
                    <form onSubmit={this.register}>
                        <Row>
                            <Col xs={12}>
                                <FormGroup controlId="userName" validationState={this.getUserNameValidationState()}>
                                    <InputGroup className="login-input">
                                        <InputGroup.Addon><Glyphicon glyph="user" /></InputGroup.Addon>
                                        <FormControl type="text" placeholder="Email address" className="input-box" onChange={event => this.setState({ emailAddr: event.target.value })} />
                                    </InputGroup>
                                    <FormControl.Feedback />
                                </FormGroup>
                                <FormGroup controlId="userName" validationState={this.getMobileNumberValidationState()}>
                                    <InputGroup className="login-input">
                                        <InputGroup.Addon><Glyphicon glyph="user" /></InputGroup.Addon>
                                        <FormControl type="text" placeholder="Mobile number" className="input-box" onChange={event => this.setState({ mobileNumber: event.target.value })} />
                                    </InputGroup>
                                    <FormControl.Feedback />
                                </FormGroup>
                                <FormGroup controlId="password" validationState={this.getPasswordValidationState()}>
                                    <InputGroup className="login-input">
                                        <InputGroup.Addon><Glyphicon glyph="lock" /></InputGroup.Addon>
                                        <FormControl type="password" placeholder="Password" onChange={event => this.setState({ password: event.target.value })} />
                                    </InputGroup>
                                    <FormControl.Feedback />
                                </FormGroup>
                                <FormGroup controlId="password" validationState={this.getPasswordRetypeValidationState()}>
                                    <InputGroup className="login-input">
                                        <InputGroup.Addon><Glyphicon glyph="lock" /></InputGroup.Addon>
                                        <FormControl type="password" placeholder="Re-enter password" onChange={event => this.setState({ passwordRetype: event.target.value })} />
                                    </InputGroup>
                                    <FormControl.Feedback />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row style={{ display: 'block' }}>
                            <Col xs={8} />
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