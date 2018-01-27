import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';

export default class ChooseDays extends Component{
    componentDidMount(){
        if(this.props.screenProps && this.props.screenProps.onRouteActivated)
            this.props.screenProps.onRouteActivated('ChooseDays');
    }
    next = () => {
        alert('submit form')
    }

    back = () => {
        this.props.navigation.navigate('ChoosePackage');
    }

    render(){
        return (
            <View>
                <Text>Choose Days</Text>
                <Button onPress={this.next}  title='Next'/>
                <Button onPress={this.back}  title='Back'/>
            </View>
        );
    }
}