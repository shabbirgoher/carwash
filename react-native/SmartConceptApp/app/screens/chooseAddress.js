import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';

export default class ChooseAddress extends Component{
    componentDidMount(){
        if(this.props.screenProps && this.props.screenProps.onRouteActivated)
            this.props.screenProps.onRouteActivated('ChooseAddress');
    }
    next = () => {
        this.props.navigation.navigate('ChoosePackage');
    }

    back = () => {
        this.props.navigation.navigate('ChooseVehicle');
    }

    render(){
        return (
            <View>
                <Text>Choose Address</Text>
                <Button onPress={this.next}  title='Next'/>
                <Button onPress={this.back}  title='Back'/>
            </View>
        );
    }
}