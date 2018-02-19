import React, { Component } from 'react';
import { View } from 'react-native';
import {
    FormLabel,
    FormInput,
    FormValidationMessage,
} from "react-native-elements";

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class Email extends Component {

    constructor(props) {
        super(props);
        this.state = {
            emailAddr: '',
            emailError: ''
        }
    }

    validate(emailAddr) {
        return emailReg.test(emailAddr);
    }

    onEmailAddrChange = (emailAddr) => {
        this.setState({
            emailAddr: emailAddr
        });
        if(this.validate(emailAddr)){
            if (this.props.hasError) this.props.hasError(false, this.state.emailAddr);
        }
        else{
            if (this.props.hasError) this.props.hasError(true, this.state.emailAddr);            
        }
    }

    onEndEditing = () => {
        var msg = this.validate(this.state.emailAddr) ? '' : 'Invalid email address';
        this.setState({
            emailError: msg
        });
    }

    render() {
        return (
            <View>
                <FormLabel >Email Address</FormLabel>
                <FormInput maxLength={30}
                    onChangeText={this.onEmailAddrChange}
                    keyboardType='email-address'
                    onEndEditing={this.onEndEditing}
                    editable={!this.props.disabled}
                />
                <FormValidationMessage>{this.state.emailError}</FormValidationMessage>
            </View>
        );
    }
}