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
const SubmitButton = ({ text, disabled }) => <Row style={{ display: 'block' }}>
    <Col md={8} xs={6} />
    <Col md={4} xs={6}>
        <Button type="submit" disabled={disabled}>{text}</Button>
    </Col>
</Row>
export default class ForgotPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailAddr: '',
            oldPassword: '',
            password: '',
            passwordRetype: '',
            enterNewPassword: false,
            token: '',
            errorMessage: '',
            redirect: false,
            loading: true
        }
    }
    componentDidMount() {
        this.setState({ loading: false });
    }
    getEmailValidationState = () => {
        const emailAddr = this.state.emailAddr;
        return emailAddr === '' ? null : emailReg.test(emailAddr) ? 'success' : 'error';
    }
    getOldPasswordValidationState = () => {
        const password = this.state.oldPassword;
        return password === '' ? null : password.length < 8 ? 'error' : 'success';
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

    regeneratePassword = (event) => {
        this.setState({ errorMessage: '', loading: true });
        event.preventDefault();
        if (this.hasError(this.getEmailValidationState)) {
            this.setState({ errorMessage: 'Please correct the above details', loading: false });
            return;
        }
        AuthService.onRegeneratePassword({ emailAddr: this.state.emailAddr })
            .then((response) => {
                this.setState({ enterNewPassword: true, token: response.token, loading: false });
            })
            .catch((err) => this.setState({ errorMessage: err.message || 'Unable to regenerate your password', loading: false }));
    }
    resetPassword = (event) => {
        this.setState({ errorMessage: '', loading: true });
        event.preventDefault();
        if (this.hasError(this.getOldPasswordValidationState) || this.hasError(this.getPasswordValidationState) || this.hasError(this.getPasswordRetypeValidationState)) {
            this.setState({ errorMessage: 'Please correct the above details', loading: false });
            return;
        }
        AuthService.onResetPassword(this.state.token, { emailAddr: this.state.emailAddr, oldPassword: this.state.oldPassword, newPassword: this.state.password })
            .then(() => this.setState({ redirect: true, loading: false }))
            .catch((err) => this.setState({ errorMessage: err.message || 'Unable to reset your password', loading: false }));
    }
    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirect } = this.state;
        const RegeneratePasswordButton = this.state.enterNewPassword
            ? null
            : <Button type="submit">Done</Button>;
        const ResetPasswordButton = this.state.enterNewPassword
            ? <Button type="submit">Done</Button>
            : null;

        if (redirect) {
            return <Redirect to={from} />;
        }

        return (
            <Row>
                <Col xs={12}>
                    <form onSubmit={this.regeneratePassword}>
                        <Row>
                            <Col xs={12}>
                                <FormGroup controlId="userName" validationState={this.getEmailValidationState()}>
                                    <InputGroup className="login-input">
                                        <InputGroup.Addon><Glyphicon glyph="user" /></InputGroup.Addon>
                                        <FormControl type="text" placeholder="Email address" className="input-box"
                                            onChange={event => this.setState({ emailAddr: event.target.value })}
                                            disabled={this.state.enterNewPassword} />
                                    </InputGroup>
                                    <FormControl.Feedback />
                                </FormGroup>
                            </Col>
                        </Row>
                        {this.state.enterNewPassword ? null : <SubmitButton text="Regenerate" disabled={this.state.loading} />}
                    </form>
                    {this.state.enterNewPassword
                        ? <form onSubmit={this.resetPassword}>
                            <Row>
                                <Col xs={12}>
                                    <FormGroup controlId="oldPassword" validationState={this.getOldPasswordValidationState()}>
                                        <InputGroup className="login-input">
                                            <InputGroup.Addon><Glyphicon glyph="lock" /></InputGroup.Addon>
                                            <FormControl type="password" placeholder="Old password" onChange={event => this.setState({ oldPassword: event.target.value })} />
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
                                    <FormGroup controlId="retype-password" validationState={this.getPasswordRetypeValidationState()}>
                                        <InputGroup className="login-input">
                                            <InputGroup.Addon><Glyphicon glyph="lock" /></InputGroup.Addon>
                                            <FormControl type="password" placeholder="Re-enter password" onChange={event => this.setState({ passwordRetype: event.target.value })} />
                                        </InputGroup>
                                        <FormControl.Feedback />
                                    </FormGroup>
                                </Col>
                            </Row>
                            {this.state.enterNewPassword ? <SubmitButton text="Reset" disabled={this.state.loading} /> : null}
                        </form>
                        : null}
                    <Row>
                        <Col xs={12}>
                            <InputalidationMessage message={this.state.errorMessage} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}