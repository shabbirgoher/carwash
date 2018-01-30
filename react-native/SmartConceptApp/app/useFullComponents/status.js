import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Status extends Component{
    render() {
        return (
            <View style={styles.activeRoute}>
                <Icon name="circle" size={40} color={this.props.color} />
                <Text>{this.props.textLine1}</Text>
                <Text>{this.props.textLine2}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    activeRoute: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});