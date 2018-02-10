import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

export default class PackagePeriod extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }} />
                <View style={{ flex: 1, backgroundColor: '#d3d3d3', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#FFF' }}>1 Month</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: '#808080', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#FFF' }}>3 Months</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: '#a9a9a9', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#FFF' }}>6 Months</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: '#000000', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: '#FFF' }}> 12 Months</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFF',
    }
});