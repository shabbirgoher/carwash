import { AsyncStorage } from 'react-native';
import { getJWT } from './tokenService'
const USER_KEY = "user_key"

export async function fetchUser() {

    let token = getJWT();
    console.log("token " + token)
    return await getUser() || fetch('http://10.0.2.2/api/secure', {
        method: 'get',
        headers: {
            'Authorization': token
        }
    })
        .then((response) => response.json())
        .then((responseJson) => {
            setUser(responseJson);
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
}

async function setUser(user){
    try {
        await AsyncStorage.setItem(USER_KEY, user);
    } catch (error) {
        console.log('AsyncStorage error in user service: ' + error.message);
    }
}

async function getUser(){
    return await AsyncStorage.getItem(USER_KEY);
}