import React, { Component } from "react";
import { Card, Button, FormValidationMessage } from "react-native-elements";

import Email from './../../useFullComponents/email';
import Password from './../../useFullComponents/password';
import MobileNumber from './../../useFullComponents/mobile';
import { onLocalSignUp, setJWT } from './../../services/tokenService';

export default class LocalSignUp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            emailError: true,
            emailAddr: '',
            mobileNumberError: true,
            mobileNumber: '',
            password: '',
            passwordError: true,
            reenteredPassword: '',
            reenteredPasswordError: true,
            errorMessage: '',
        };
    }

    hasEmailError = (error, emailAddr) => {
        this.setState({
            emailError: error,
            emailAddr: emailAddr
        });
    }

    hasMobileNumberError = (error, mobileNumber) => {
        this.setState({
            mobileNumberError: error,
            mobileNumber: mobileNumber
        });
    }

    hasPasswordError = (error, password) => {
        this.setState({
            passwordError: error,
            password: password
        });
    }

    hasReenteredPasswordError = (error, password) => {
        this.setState({
            reenteredPassword: password,
            reenteredPasswordError: error
        });
    }

    validateErrors(){
        if(this.state.emailError || this.state.mobileNumberError || this.state.passwordError || this.state.reenteredPasswordError){
            this.setState({ errorMessage: 'Please correct above details' });            
            return false;
        }
        return true;
    }

    validatePasswords(){
        if(this.state.password !== this.state.reenteredPassword){
            this.setState({ errorMessage: 'New password did not match' });
            return false;
        }
        return true;
    }

    signUp = () => {
        this.setState({ errorMessage: '' });
        if(this.validateErrors() && this.validatePasswords()){
            onLocalSignUp({email: this.state.emailAddr, mobileNumber: this.state.mobileNumber, password: this.state.password})
                .then((response) => 
                    {
                        setJWT(response.token);
                        this.props.onLogin('SignedIn');        
                    }
                )
                .catch((err) => 
                    this.setState(
                        { 
                            errorMessage: err.message || 'Unable to sign up' 
                        }
                    )
                );
        }
    }

    render(){
        return(
            <Card>
                <Email hasError={this.hasEmailError} />
                <MobileNumber hasError={this.hasMobileNumberError}/>
                <Password hasError={this.hasPasswordError} />
                <Password passwordText='Reenter password' hasError={this.hasReenteredPasswordError} />
                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#03A9F4"
                    title="SIGN UP"
                    onPress={this.signUp}
                />
                <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
            </Card>
        )
    }
}