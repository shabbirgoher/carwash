
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
        if (this.ValidatePassword(password)) {
            if (this.props.hasError) this.props.hasError(false, password);
        }
        else {
            if (this.props.hasError) this.props.hasError(true, password);
        }
    }

    ValidatePassword(passowrd) {
        return !(!passowrd || passowrd.length < 8)
    }

    onEndEditing = () => {
        const msg = this.ValidatePassword(this.state.password) ? '' : 'Passowrd should be of minimum 8 characters'
        this.setState({
            passwordError: msg
        });
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