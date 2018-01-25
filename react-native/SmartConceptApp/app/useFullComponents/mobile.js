import React, {Component} from 'react';
import {View} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from "react-native-elements";

export default class MobileNumber extends Component{
    constructor(props){
        super(props);
        this.state = {
            mobileNumber: '',
            mobileNumberError: ''
        }
    }
    onMobileNumberChange = (mobileNumber) => {
        this.setState ({
            mobileNumber: mobileNumber
        });
    }
    onEndEditing = () => {
        var numbers = '0123456789';
        let text = this.state.mobileNumber;
        var error = false;
        for (var i=0; i < text.length; i++) {
            if(numbers.indexOf(text[i]) < 0 ) {
                error = true;
            }
        }
        if(text.length != 10 || error){
            this.setState({
                mobileNumberError: 'Invalid mobile number'
            });
            error = true;
        }
        else{
            this.setState({
                mobileNumberError: ''
            });
        }
        
        if(this.props.hasError) this.props.hasError(error);        
    }
    render(){
        return (
            <View>
                <FormLabel>Mobile Number</FormLabel>
                <FormInput maxLength={10}
                    onChangeText={this.onMobileNumberChange}
                    keyboardType='numeric'
                    onEndEditing={this.onEndEditing}    
                />
                <FormValidationMessage>{this.state.mobileNumberError}</FormValidationMessage>
            </View>
            
        );
    }
}
{/* <View>
                
                <Text style={styles.text}>Mobile Number</Text>
                <TextInput 
                    maxLength={30}
                    onChangeText={this.onMobileNumberChange}
                    keyboardType='numeric'
                    style={styles.input}
                    onEndEditing={this.onEndEditing}
                    />
                <Text style={styles.error}>{this.state.mobileNumberError}</Text>
        </View> */}