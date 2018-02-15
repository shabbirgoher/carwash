import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Button, ButtonGroup } from "react-native-elements";
import {
    StyleSheet,
    View,
    Text,
    ScrollView
} from 'react-native';

import Login from './../components/login/login';
import LocalSignUp from './../components/login/localSignUp';
import ForgotPassword from './../components/login/forgotPassword';

const selectedColor = '#03A9F4';
const unselectedColor = '#f5f5f5';

export default class LoginScreen extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            selectedIndex: 0
        };
    }

    updateIndex = (selectedIndex) => {
        this.setState({selectedIndex});
    }
    
    onLogin = (next, params) => {
        this.props.navigation.navigate(next, params);
    }

    render() {
        const buttons = ['Sign In', 'Register', 'Password\nReset'];
        const { selectedIndex } = this.state;
        var Layout = <Text></Text>;
        switch(selectedIndex){
            case 0:
                Layout = Login;
                break;
            case 1:
                Layout = LocalSignUp;
                break;
            case 2:
                Layout = ForgotPassword;
                break;
        }
        return (
            <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
                <View style={styles.top}>
                    <Card>
                        <ButtonGroup 
                            onPress={this.updateIndex}
                            selectedIndex={selectedIndex}
                            buttons={buttons}
                            containerStyle={{height: 40}}
                            selectedButtonStyle={{backgroundColor: '#03A9F4'}}
                            selectedBackgroundColor= '#03A9F4'
                        />
                    </Card>
                </View>
                <View style={styles.bottom}>
                    <Layout onLogin={this.onLogin}/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    top: {
        flex: 1,
        marginBottom: 5,
    },
    bottom: {
        flex: 4,
        marginTop: 5,
    }
});