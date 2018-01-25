import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import User from './user'

export default class AppointmentHistory extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Nothing booked yet</Text>
                <User/>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    }
});