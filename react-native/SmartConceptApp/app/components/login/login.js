import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import SocialLogin from './socialLogin';
import LocalLogin from './localLogin';
import { Text } from 'react-native-elements';

export default class Login extends Component {
    onLogin = (next, params) => {
        this.props.onLogin(next, params);
    }

    render() {
        return (
            <View style={styles.container}>
                <LocalLogin onLogin={this.onLogin}/>
                <SocialLogin onLogin={this.onLogin}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',        
    }
});