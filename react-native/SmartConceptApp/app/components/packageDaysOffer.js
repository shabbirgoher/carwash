import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

export default class PackageDaysOffer extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.days, {backgroundColor: '#87ceeb'}]}>
                    <Text>Basic Package</Text>
                    <Text style={{ color: '#FFF' }}>8 car washes a month</Text>
                </View>
                <View style={[styles.days, {backgroundColor: '#00bfff'}]}>
                    <Text>Advance Package</Text>
                    <Text style={{ color: '#FFF' }}>12 car washes a month</Text>
                </View>
                <View style={[styles.days, {backgroundColor: '#4682b4'}]}>
                    <Text>Daily Package</Text>
                    <Text style={{ color: '#FFF' }}>26 car washes a month</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    days: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        backgroundColor: '#87ceeb'
    }
});