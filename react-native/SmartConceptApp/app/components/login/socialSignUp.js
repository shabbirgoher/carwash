import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { Card, Button, FormValidationMessage } from "react-native-elements";

import Email from './../../useFullComponents/email';
import MobileNumber from './../../useFullComponents/mobile';
import {onSignUp} from './../../services/tokenService'
import { setJWT } from './../../services/tokenService'

export default class SocialSignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            emailError: true,
            emailAddr: '',            
            mobileNumberError: true,
            mobileNumber: '',
            jwtToken: this.props.navigation.state.params.jwtToken,
            errorMessage: '',
            isLoading: true
        };
    }
    componentDidMount(){
        this.setState({
            isLoading: false
        });
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

    signUp = () => {
        this.setState({
            isLoading: true
        });
        onSignUp(
            this.state.jwtToken, 
            {email: this.state.emailAddr, mobileNumber: this.state.mobileNumber}
        ).then((response) => {
            if(!response.token){
                this.setState({
                    errorMessage: 'Unable to signup. Please try again.',
                    isLoading: false
                });
            }
            else{
                setJWT(response.token);
                this.setState({errorMessage: ''});
                this.props.navigation.navigate('SignedIn');
            }
        }).catch(function(error){
            console.error(error);
        });
    }
    render(){
        return(
            <View style={styles.container}>
                <Card>
                    <Email hasError={this.hasEmailError}/>
                    <MobileNumber hasError={this.hasMobileNumberError}/>
                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="SIGN UP"
                        onPress={this.signUp}
                        disabled= {this.state.isLoading || this.state.emailError || this.state.mobileNumberError}
                    />
                    <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'stretch',
        justifyContent: 'space-between'
    },
});


{/* <View style={styles.container}>
                    <Email hasError = {this.hasEmailError}/>
                    <MobileNumber hasError = {this.hasMobileNumberError}/>
                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {this.signUp}
                        disabled={this.state.emailError || this.state.mobileNumberError}
                        >
                        <Text style = {styles.submitButtonText}> Sign Up </Text>
                    </TouchableOpacity>
            </View> */}