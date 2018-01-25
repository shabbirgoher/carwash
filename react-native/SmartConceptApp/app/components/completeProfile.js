import React, { Component } from "react";
import {
    View, 
    Text, 
    StyleSheet,
    TextInput
} from 'react-native'

import {getIncompleteProfile} from './../services/userService'

export default class CompleteProfile extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading:true
        };
    }

    async componentDidMount(){
        let incompleteProfile = await getIncompleteProfile();
        if(!incompleteProfile){
            this.props.navigation('Home');
        }
        else{
            this.setState = {
                isLoading: false
            }
        }
    }



    render(){
        return (
            <View style={styles.container}>
                {
                    this.state.isLoading
                    ?
                        <Text/>
                    :(
                        <View>
                            <Text style={styles.text}>Email Address</Text>
                            <TextInput keyboardType='email-address'/>
                        </View>
                    )
                }
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