import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    StyleSheet,
    View,
    Text,
    Platform,
    Linking
} from 'react-native';
import SafariView from 'react-native-safari-view';
import { setJWT } from './../services/tokenService'

export default class Login extends Component {
    componentDidMount() {
        Linking.addEventListener('url', this.handleOpenURL);
        Linking.getInitialURL().then((url) => {
            if (url) {
                this.handleOpenURL({ url });
            }
        });
    };

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    };

    handleOpenURL = ({ url }) => {
        const [, jwtToken, missingKeys] = url.match(/token=([^#]+)&missing=([^#]+)/);
        if (Platform.OS === 'ios') {
            SafariView.dismiss();
        }
        console.debug("missingkeys::"+missingKeys);
        if(missingKeys){
            this.props.navigation.navigate('SignUp', {jwtToken: jwtToken});
        }
        else{
            setJWT(jwtToken);            
            this.props.navigation.navigate('SignedIn');  
        }
    };

    loginWithFacebook = () => this.openURL('http://10.0.2.2:3000/auth/facebook');
    loginWithGoogle = () => this.openURL('https://10.0.2.2:3000/auth/google');

    openURL = (url) => {
        if (Platform.OS === 'ios') {
            SafariView.show({
                url: url,
                fromBottom: true,
            });
        }
        else {
            Linking.openURL(url);
        }
    };

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
                {/* Login buttons */}
                <View style={styles.buttons}>
                    <Icon.Button
                        name="facebook"
                        backgroundColor="#3b5998"
                        onPress={this.loginWithFacebook}
                        {...iconStyles}
                    >Login with Facebook</Icon.Button>
                    <Icon.Button
                        name="google"
                        backgroundColor="#DD4B39"
                        onPress={this.loginWithGoogle}
                        {...iconStyles}
                    >Or with Google</Icon.Button>
                </View>
            </View>
        );
    }
}

const iconStyles = {
    borderRadius: 10,
    iconStyle: { paddingVertical: 5 },
};

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
    buttons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 20,
        marginBottom: 30,
    },
});