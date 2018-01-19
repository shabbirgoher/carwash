import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { getJWT } from './../services/tokenService'
import {fetchUser} from './../services/userService'

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }
    
    async componentDidMount() {
        var user = await fetchUser()
        if (!user) {
            //navigate to login page
        }
        else {
            this.setState = {
                isLoading: false,
                user: user
            }
        }
    }

    async getUserFormStorage() {
        console.log("getting user");
        let user = await AsyncStorage.getItem(USER_KEY);
        console.log("user " + user);
        return user;
    }
    
    render() {
        return (
            <View style={styles.container}>
                {
                    !this.state.isLoading
                        ? <Text>loading.......</Text>
                        : <Text > Hello </Text>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    }
});