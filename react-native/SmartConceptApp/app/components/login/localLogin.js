import React, { Component } from "react";
import { Card, Button, FormValidationMessage } from "react-native-elements";

import Email from './../../useFullComponents/email';
import Password from './../../useFullComponents/password';
import { onLocalLogin, setJWT } from './../../services/tokenService';

export default class LocalLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailError: true,
            emailAddr: '',
            password: '',
            passwordError: true,
            errorMessage: '',
        };
    }

    hasEmailError = (error, emailAddr) => {
        this.setState({
            emailError: error,
            emailAddr: emailAddr
        });
    }

    hasPasswordError = (error, password) => {
        this.setState({
            passwordError: error,
            password: password
        });
    }

    signIn = () => {
        this.setState({ errorMessage: '' });
        if (this.state.emailError || this.state.passwordError) {
            this.setState({ errorMessage: 'Please correct above details.' });
            return;
        }

        onLocalLogin({emailAddr: this.state.emailAddr, password: this.state.password})
            .then((response) => {
                setJWT(response.token);
                this.props.onLogin('SignedIn');
            })
            .catch((err) => this.setState(
                {
                    errorMessage: err.message || 'Unable to login' 
                }
            ));
    }

    render() {
        return (
            <Card>
                <Email hasError={this.hasEmailError} />
                <Password hasError={this.hasPasswordError} />
                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#03A9F4"
                    title="SIGN IN"
                    onPress={this.signIn}
                />
                <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
            </Card>
        )
    }
}