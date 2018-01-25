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
            isLoading: true,
            user: null,
            isIncompelete: false
        }
    }
    
    async componentDidMount() {
        var user = await fetchUser()
        if (!user) {
            this.props.navigation.navigate('SignedOut');
        }
        else {
            this.setState = {
                isLoading: false,
                user: user,
                //isIncompelete: user.isIncompelete,
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
                        ? (<Text>loading.......</Text>)
                        : (
                            <View style={styles.container}>
                                <Text style={styles.text}> Hello {this.state.user.userName}</Text>
                                {this.state.isIncompelete ? <UserProfile user={this.state.user}/>: <Text />}
                            </View>
                        )
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    text: {
        textAlign: 'center',
        color: '#333',
        marginBottom: 5,
    }
});