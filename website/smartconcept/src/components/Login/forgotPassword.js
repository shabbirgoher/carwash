import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import "./style.css";
import { AuthService } from "./../../services/authService";
import InputalidationMessage from './../inputalidationMessage';

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailError: true,
            emailAddr: '',
            oldPasswordError: true,
            oldPassword: '',
            newPasswordError: true,
            newPassword: '',
            reenteredPasswordError: true,
            reenteredPassword: '',
            errorMessage: '',
            enterNewPassword: false,
            token: '',
            redirectToReferrer: false
        };
    }

    componentWillMount() {
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

    handleOldPasswordChange = event => {
        const oldPassword = event.target.value;
        const oldPasswordError = !oldPassword || oldPassword.length < 8 ? 'Password should be of minimum 8 characters' : '';
        this.setState({
            oldPassword: oldPassword,
            oldPasswordError: oldPasswordError
        });
    }

    handleNewPasswordChange = event => {
        const password = event.target.value;
        const passwordError = !password || password.length < 8 ? 'Password should be of minimum 8 characters' : '';
        const passwordRetypeError = password !== this.state.reenteredPasswordError ? 'Password did not match' : '';
        this.setState({
            newPassword: password,
            newPasswordError: passwordError,
            reenteredPasswordError: passwordRetypeError
        });
    }

    hasReenteredPasswordError = event => {
        const retypePassword = event.target.value;
        const passwordRetypeError = retypePassword !== this.state.newPassword ? 'Password did not match' : '';
        this.setState({
            reenteredPassword: retypePassword,
            reenteredPasswordError: passwordRetypeError
        });
    }
    hasError = () => {
        const error = this.state.emailError;
        return error !== '';
    }

    regeneratePassword = () => {
        this.setState({ errorMessage: '' });
        AuthService.onRegeneratePassword({ emailAddr: this.state.emailAddr })
            .then((response) => {
                this.setState({ enterNewPassword: true, token: response.token });
            })
            .catch((err) => this.setState({ errorMessage: err.message || 'Unable to regenerate your password' }));
    }

    resetPassword = () => {
        this.setState({ errorMessage: '' });
        AuthService.onResetPassword(this.state.token, { emailAddr: this.state.emailAddr, oldPassword: this.state.oldPassword, newPassword: this.state.newPassword })
            .then(() => this.setState({ redirectToReferrer: true }))
            .catch((err) => this.setState(
                {
                    errorMessage: err.message || 'Unable to reset your password'
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
            <form>
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
                                disabled={this.state.enterNewPassword}
                            />
                        </li>
                        <li>
                            <InputalidationMessage message={this.state.emailError} />
                        </li>
                    </ul>
                </FormGroup>
                {
                    !this.state.enterNewPassword
                        ?
                        <ul>
                            <li>
                                <Button
                                    block
                                    bsSize="large"
                                    disabled={this.state.emailError !== ''}
                                    onClick={this.regeneratePassword}
                                >
                                    Generate temporay password
                            </Button>
                            </li>
                            <li>
                                <InputalidationMessage message={this.state.errorMessage} />
                            </li>
                        </ul>
                        :
                        <div>
                            <FormGroup controlId="password" bsSize="large">
                                <ul>
                                    <li>
                                        <ControlLabel>Old Password</ControlLabel>

                                    </li>
                                    <li>
                                        <FormControl
                                            value={this.state.oldPassword}
                                            onChange={this.handleOldPasswordChange}
                                            type="password"
                                        />
                                    </li>
                                    <li>
                                        <InputalidationMessage message={this.state.oldPasswordError} />
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
                                            value={this.state.newPassword}
                                            onChange={this.handleNewPasswordChange}
                                            type="password"
                                        />
                                    </li>
                                    <li>
                                        <InputalidationMessage message={this.state.newPasswordError} />
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
                                            value={this.state.reenteredPassword}
                                            onChange={this.hasReenteredPasswordError}
                                            type="password"
                                        />
                                    </li>
                                    <li>
                                        <InputalidationMessage message={this.state.reenteredPasswordError} />
                                    </li>
                                </ul>
                            </FormGroup>
                            <ul>
                                <li>
                                    <Button
                                        block
                                        bsSize="large"
                                        disabled={this.hasError()}
                                        onClick={this.resetPassword}
                                    >
                                        Sign Up
                            </Button>
                                </li>
                                <li>
                                    <InputalidationMessage message={this.state.errorMessage} />
                                </li>
                            </ul>
                        </div>}
            </form>
        )
    }
}