import React, { Component } from "react";
import {
    Card,
    Button,
    FormValidationMessage
} from "react-native-elements";

import Email from './../../useFullComponents/email';
import { onResetPassword } from './../../services/tokenService'

export default class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailError: true,
            emailAddr: '',
            errorMessage: '',
        };
    }

    hasEmailError = (error, emailAddr) => {
        this.setState({
            emailError: error,
            emailAddr: emailAddr
        });
    }

    resetPassword = () => {
        if (this.state.emailError) {
            this.setState({ errorMessage: 'Please correct above details.' });
            return;
        }
        else {
            onResetPassword({emailAddr: this.state.emailAddr})
                .then(() => this.props.onLogin('SignIn'))
                .catch((err) => this.setState({ errorMessage: 'Unable to reset your password' }))
        }
    }

    render() {
        return (
            <Card>
                <Email hasError={this.hasEmailError} />
                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#03A9F4"
                    title="Reset my password"
                    onPress={this.resetPassword}
                    disabled={this.state.isLoading}
                />
                <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
            </Card>
        )
    }
}