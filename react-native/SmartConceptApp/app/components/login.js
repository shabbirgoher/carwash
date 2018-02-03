import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import SocialLogin from './socialLogin';
import LocalLogin from './localLogin';

export default class Login extends Component {
    onLogin = (next, params) => {
        this.props.navigation.navigate(next, params);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={styles.header}>Welcome Stranger!</Text>
                    <View style={styles.avatar}>
                        <Icon name="user-circle" size={100} color="rgba(0,0,0,.09)" />
                    </View>
                    <Text style={styles.text}>
                        Please log in to continue {'\n'}
                        to the awesomness</Text>
                </View>
                <LocalLogin />
                <SocialLogin onLogin={this.onLogin}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        margin: 20,
    },
    header: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    text: {
        textAlign: 'center',
        color: '#333',
        marginBottom: 5,
    },
});