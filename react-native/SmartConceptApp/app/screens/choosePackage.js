import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button
} from 'react-native';

export default class ChoosePackage extends Component{
    componentDidMount(){
        if(this.props.screenProps && this.props.screenProps.onRouteActivated)
            this.props.screenProps.onRouteActivated('ChoosePackage');
    }
    next = () => {
        this.props.navigation.navigate('ChooseDays');        
    }

    back = () => {
        this.props.navigation.navigate('ChooseAddress');
    }


    render(){
        return (
            <View>
                <Text>Choose Package</Text>
                <Button onPress={this.next}  title='Next'/>
                <Button onPress={this.back}  title='Back'/>
            </View>
        );
    }
}