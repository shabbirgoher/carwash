
import React, { Component } from 'react';
import { View } from 'react-native';
import {
    FormLabel,
    FormInput,
    FormValidationMessage,
} from "react-native-elements";

export default class Passowrd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: '',
            passwordError: ''
        }
    }

    onPasswordChange = (password) => {
        this.setState({
            password: password
        });
    }

    ValidatePassword(passowrd) {
        return !(!passowrd || passowrd.length < 8)
    }

    onEndEditing = () => {
        var error = true;
        if (!this.ValidatePassword(this.state.password)) {
            this.setState({
                passwordError: 'Passowrd should be of minimum 8 characters.'
            });
            error = true;
        }
        else {
            this.setState({
                passwordError: ''
            });
            error = false;
        }
        if (this.props.hasError) this.props.hasError(error, this.state.password);
    }

    render() {
        return (
            <View>
                <FormLabel>{this.props.passwordText || 'Password'}</FormLabel>
                <FormInput maxLength={20}
                    secureTextEntry={true}
                    onChangeText={this.onPasswordChange}
                    onEndEditing={this.onEndEditing}
                />
                <FormValidationMessage>{this.state.passwordError}</FormValidationMessage>
            </View>
        );
    }
}