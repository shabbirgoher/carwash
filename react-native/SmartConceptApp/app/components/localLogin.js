import React, { Component } from "react";
import { View } from 'react-native';
import { Card, Button } from "react-native-elements";

import Email from './../useFullComponents/email';
import Password from './../useFullComponents/password';
export default class LocalLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailError: true,
            emailAddr: '',
            password: '',
            passwordErr: true
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
            epasswordError: error,
            password: password
        });
    }

    render() {
        return (
            <View >
                <Email hasError={this.hasEmailError} />
                <Password hasError={this.hasPasswordError} />
                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#03A9F4"
                    title="SIGN IN"
                    onPress={this.signUp}
                    disabled={this.state.isLoading || this.state.emailError || this.state.passwordErr}
                />
            </View>
        )
    }
}