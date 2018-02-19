import React, { Component } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from "react-native-elements";

export default class MobileNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobileNumber: '',
            mobileNumberError: ''
        }
    }
    validate(text){
        var numbers = '0123456789';
        for (var i = 0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) < 0) {
                return false;
            }
        }
        if (text.length != 8) {
            return false;       
        }
        return true;
    }
    onMobileNumberChange = (mobileNumber) => {
        this.setState({
            mobileNumber: mobileNumber
        });
        if(this.validate(mobileNumber)){
            if (this.props.hasError) this.props.hasError(false, mobileNumber);
        }
        else{
            if (this.props.hasError) this.props.hasError(true, mobileNumber);
        }
    }
    
    onEndEditing = () => {
        const msg = this.validate(this.state.mobileNumber) ? '' : 'Invalid mobile number';
        this.setState({
            mobileNumberError: msg
        });
    }
    render() {
        return (
            <View>
                <FormLabel>Mobile Number</FormLabel>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FormInput placeholder='+968' editable={false} containerStyle={{ flex: 1 }} />
                    <FormInput maxLength={8}
                        containerStyle={{ flex: 3 }}
                        onChangeText={this.onMobileNumberChange}
                        keyboardType='numeric'
                        onEndEditing={this.onEndEditing}
                    />
                </View>
                <FormValidationMessage>{this.state.mobileNumberError}</FormValidationMessage>
            </View>

        );
    }
}