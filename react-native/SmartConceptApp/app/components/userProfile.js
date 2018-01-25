import React, { Component } from "react";
import {
    View, 
    Text, 
    StyleSheet,
    TextInput
} from 'react-native'

export default class UserProfile extends Component{
    render(){
        return (
            <View style={styles.container}> 
                <Text style={styles.text}>Email Address</Text>
                <TextInput keyboardType='email-address'
                    
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    text: {
        textAlign: 'center',
        color: '#333',
        marginBottom: 5,
    }
});