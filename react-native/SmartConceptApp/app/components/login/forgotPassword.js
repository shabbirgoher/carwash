import React, { Component } from "react";
import {
    Card,
    Button,
    FormValidationMessage
} from "react-native-elements";

import Email from './../../useFullComponents/email';
import Password from './../../useFullComponents/password';
import { onResetPassword, onRegeneratePassword, setJWT, getJWT } from './../../services/tokenService'

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
            token: ''            
        };
    }

    hasEmailError = (error, emailAddr) => {
        this.setState({
            emailError: error,
            emailAddr: emailAddr,
        });
    }
    
    hasOldPasswordError = (error, password) => {
        this.setState({
            oldPasswordError: error,
            oldPassword: password,
        });
    }

    hasNewPasswordError = (error, password) => {
        this.setState({
            newPasswordError: error,
            newPassword: password,
        });
    }

    hasReenteredPasswordError = (error, password) => {
        this.setState({
            reenteredPasswordError: error,
            reenteredPassword: password,
        });
    }

    validatePasswords(){
        if(this.state.oldPasswordError || this.state.newPasswordError || this.state.reenteredPassword){
            this.setState({ errorMessage: 'Please correct above details' });            
            return false;
        }

        else if(this.state.newPasswordError !== this.state.reenteredPassword){
            this.setState({ errorMessage: 'New password did not match' });
            return false;            
        }
        return true;
    }

    regeneratePassword = () => {
        if (this.state.emailError) {
            this.setState({ errorMessage: 'Please correct above details' });
            return;
        }
        else {
            onRegeneratePassword({emailAddr: this.state.emailAddr})
                .then((response) => 
                {
                    this.setState(
                    {
                        enterNewPassword: true,
                        errorMessage: '',
                        token: response.token
                    });
                })
                .catch((err) => this.setState(
                    { 
                        errorMessage: err.message || 'Unable to regenerate your password' 
                    }
                ));
        }
    }

    resetPassword = () => {
        if(!this.validatePasswords()){
            return;
        }
        onResetPassword(this.state.token, {emailAddr: this.state.emailAddr, oldPassword: this.state.oldPassword, newPassword: this.state.newPassword})
            .then(() => this.props.onLogin('SignIn'))
            .catch((err) => this.setState(
                { 
                    errorMessage: err.message || 'Unable to reset your password' 
                }
            ));
    }

    render() {
        return (
            <Card>
                <Email hasError={this.hasEmailError} disabled={this.state.enterNewPassword}/>
                {
                    !this.state.enterNewPassword ?
                        <Button
                            buttonStyle={{ marginTop: 20 }}
                            backgroundColor="#03A9F4"
                            title="Generate temporay password"
                            onPress={this.regeneratePassword}
                            disabled={this.state.isLoading}
                        />
                        :
                        <View>
                            <Password passwordText='Old password' hasError={this.hasOldPasswordError}/>
                            <Password passwordText='New password' hasError={this.hasNewPasswordError}/>
                            <Password passwordText='Renter your password' hasError={this.hasReenteredPasswordError}/>
                            <Button
                                buttonStyle={{ marginTop: 20 }}
                                backgroundColor="#03A9F4"
                                title="Reset password"
                                onPress={this.resetPassword}
                                disabled={this.state.isLoading}
                            />
                        </View>
                }
                <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
            </Card>
        )
    }
}