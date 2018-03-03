import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import "./style.css";
import { AuthService } from "./../../services/authService";
import InputalidationMessage from './inputalidationMessage';

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            errorMessage: '',
            redirectToReferrer: false
        };
    }

    handleEmailChange = event => {
        const email = event.target.value;
        const emailError = emailReg.test(email) ? '' : 'Invalid email address';
        this.setState({
            email: email,
            emailError: emailError
        });
    }

    handlePasswordChange = event => {
        const password = event.target.value;
        const passwordError = !password || password.length < 8 ? 'Passowrd should be of minimum 8 characters' : '';
        this.setState({
            password: password,
            passwordError: passwordError
        });
    }

    handleSubmit = event => {
        this.setState({ errorMessage: '' })
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
                    <ul>
                        <li>
                            <Button
                                block
                                bsSize="large"
                                disabled={this.state.emailError || this.state.passwordError}
                                type="submit"
                            >
                                Login
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