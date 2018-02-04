import React, {Component} from 'react';
import {View} from 'react-native';
import { 
    FormLabel,
    FormInput,
    FormValidationMessage,
} from "react-native-elements";

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class Email extends Component{

    constructor(props){
        super(props);
        this.state = {
            emailAddr: '',
            emailError: ''
        }
    }

    onEmailAddrChange = (emailAddr) => {
        this.setState ({
            emailAddr: emailAddr
        });

    }
    onEndEditing = () => {
        var error = true;
        if (!emailReg.test(this.state.emailAddr)){
            this.setState({
                emailError: 'Invalid email address'
            });
            error = true;
        }
        else{
            this.setState({
                emailError: ''
            });
            error= false;
        }
        if(this.props.hasError) this.props.hasError(error, this.state.emailAddr);
    }

    render(){
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