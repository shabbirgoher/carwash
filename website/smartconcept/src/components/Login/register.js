import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import "./style.css";
import { AuthService } from "./../../services/authService";
import InputalidationMessage from './../inputalidationMessage';

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
    constructor(props, context) {
        super(props, context);

        this.state = {
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            passwordRetype: '',
            passwordRetypeError: '',
            mobileNumber: '',
            mobileNumberError: '',
            errorMessage: '',
            redirectToReferrer: false
        };
    }

    componentWillMount(){
        this.props.activate();
    }

    handleEmailChange = event => {
        const email = event.target.value;
        const emailError = emailReg.test(email) ? '' : 'Invalid email address';
        this.setState({
            email: email,
            emailError: emailError
        });
    }

    handleMobileNumberChange = event => {
        const mobileNumber = event.target.value;
        const mobileNumberError = isNumeric(mobileNumber) ? '' : 'Invalid mobile number';
        this.setState({
            mobileNumber: mobileNumber,
            mobileNumberError: mobileNumberError
        });
    }

    handlePasswordChange = event => {
        const password = event.target.value;
        const passwordError = !password || password.length < 8 ? 'Password should be of minimum 8 characters' : '';
        const passwordRetypeError = password !== this.state.passwordRetype ? 'New password did not match' : '';
        this.setState({
            password: password,
            passwordError: passwordError,
            passwordRetypeError: passwordRetypeError
        });
    }

    handlePasswordRetypChange = event => {
        const retypePassword = event.target.value;
        const passwordRetypeError = retypePassword !== this.state.password ? 'Password did not match' : '';
        this.setState({
            passwordRetype: retypePassword,
            passwordRetypeError: passwordRetypeError
        });
    }

    hasError = () => {
        const error = this.state.emailError || this.state.passwordError || this.state.passwordRetypeError || this.state.mobileNumberError;
        return error !== '';
    }

    handleSubmit = event => {
        this.setState({ errorMessage: '' })
        event.preventDefault();
        AuthService.onSignUp({ emailAddr: this.state.email, password: this.state.password, mobileNumber: this.state.mobileNumber })
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
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <ul>
                        <li>
                            <ControlLabel>Email</ControlLabel>
                        </li>
                        <li>
                            <FormControl
                                autoFocus
                                type="email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                        </li>
                        <li>
                            <InputalidationMessage message={this.state.emailError} />
                        </li>
                    </ul>
                </FormGroup>
                <FormGroup controlId="mobileNumber" bsSize="large">
                    <ul>
                        <li>
                            <ControlLabel>Mobile number</ControlLabel>

                        </li>
                        <li>
                            <FormControl
                                value={this.state.mobileNumber}
                                onChange={this.handleMobileNumberChange}
                                type="number"
                                maxLength={8}
                                
                            />
                        </li>
                        <li>
                            <InputalidationMessage message={this.state.mobileNumberError} />
                        </li>
                    </ul>
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ul>
                        <li>
                            <ControlLabel>Password</ControlLabel>

                        </li>
                        <li>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                type="password"
                            />
                        </li>
                        <li>
                            <InputalidationMessage message={this.state.passwordError} />
                        </li>
                    </ul>
                </FormGroup>
                <FormGroup controlId="reenterPassword" bsSize="large">
                    <ul>
                        <li>
                            <ControlLabel>Reenter password</ControlLabel>

                        </li>
                        <li>
                            <FormControl
                                value={this.state.passwordRetype}
                                onChange={this.handlePasswordRetypChange}
                                type="password"
                            />
                        </li>
                        <li>
                            <InputalidationMessage message={this.state.passwordRetypeError} />
                        </li>
                    </ul>
                </FormGroup>
                <ul>
                    <li>
                        <Button
                            block
                            bsSize="large"
                            disabled={this.hasError()}
                            type="submit"
                        >
                            Sign Up
                            </Button>
                    </li>
                    <li>
                        <InputalidationMessage message={this.state.errorMessage} />
                    </li>
                </ul>
            </form>
        );
    }
}