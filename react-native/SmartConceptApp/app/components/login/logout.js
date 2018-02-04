import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from 'react-native';

import { onSignOut } from './../../services/tokenService'

export default class Logout extends Component {
    constructor(props) {
        super(props);
    }

    logout = () => {
        onSignOut();
        this.props.navigator.navigate('SignedOut');
    }
    render() {
        return (
            <View>
                <Icon.Button
                    name="sign-out"
                    onPress={this.logout}
                    {...iconStyles}
                ></Icon.Button>
            </View>
        );
    }
}

const iconStyles = {
    borderRadius: 10,
    iconStyle: { paddingVertical: 5 },
};
