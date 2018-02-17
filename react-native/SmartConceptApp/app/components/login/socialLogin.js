import React, { Component } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Platform,
    Linking,
    StyleSheet,
    View,
} from 'react-native';
import SafariView from 'react-native-safari-view';

import { setJWT } from './../../services/tokenService';

// local url
const apiUrl = 'http://10.0.2.2:3000';
// azure dev url
// const apiUrl = 'https://smartconcept.azurewebsites.net';
// azure prod url
// const apiUrl = 'http://10.0.2.2:3000';

export default class SocialLogin extends Component {
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

    getUrlParams(search) {
        let hashes = search.slice(search.indexOf('?') + 1).split('&')
        let params = {}
        hashes.map(hash => {
            let [key, val] = hash.split('=')
            params[key] = decodeURIComponent(val)
        })

        return params
    }

    handleOpenURL = ({ url }) => {
        console.log(url);
        const params = this.getUrlParams(url);
        const error = params["err"];
        if (error) {
            console.error("Unable to login :" + error);
            alert("Unable to login. If error persists contact administrator.");
            return;
        }
        const jwtToken = params['token'] ? params['token'].split('#')[0] : undefined;
        const missingKeys = params['missing'] ? params['missing'].split('#')[0] : undefined;
        if (Platform.OS === 'ios') {
            SafariView.dismiss();
        }
        console.debug("missingkeys::" + missingKeys);
        if (missingKeys) {
            this.props.onLogin('SocialSignUp', { jwtToken: jwtToken });
        }
        else {
            setJWT(jwtToken);
            this.props.onLogin('SignedIn');
        }
    };

    loginWithFacebook = () => this.openURL(apiUrl + '/auth/facebook');
    loginWithGoogle = () => this.openURL(apiUrl + '/auth/google');

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
            <View style={styles.buttons}>
                <Icon.Button
                    name="facebook"
                    backgroundColor="#3b5998"
                    onPress={this.loginWithFacebook}
                    {...iconStyles}
                >Login with Facebook</Icon.Button>
                {/* <Icon.Button
                    name="google"
                    backgroundColor="#DD4B39"
                    onPress={this.loginWithGoogle}
                    {...iconStyles}
                >Or with Google</Icon.Button> */}
            </View>
        );
    }
}


const iconStyles = {
    borderRadius: 10,
    iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
    buttons: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        margin: 20,
        marginBottom: 30,
    },
});
