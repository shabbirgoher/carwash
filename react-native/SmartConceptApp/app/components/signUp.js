import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import { Card, Button } from "react-native-elements";

import Email from './../useFullComponents/email';
import MobileNumber from './../useFullComponents/mobile';

export default class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            emailError: true,
            mobileNumberError: true,
            jwtToken: this.props.navigation.state.params.jwtToken,
        };
    }

    hasEmailError = (error) => {
        this.setState({
            emailError: error
        });
    }

    hasMobileNumberError = (error) => {
        this.setState({
            mobileNumberError: error
        });
    }
    signUp = () => {
        
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
                        disabled= {this.state.emailError || this.state.mobileNumberError}
                    />
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