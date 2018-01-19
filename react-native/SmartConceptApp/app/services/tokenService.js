import { AsyncStorage } from 'react-native';

export const JWT_KEY = 'id_token';

export async function setJWT(token) {
    try {
        await AsyncStorage.setItem(JWT_KEY, token);
    } catch (error) {
        console.log('AsyncStorage error: ' + error.message);
    }
}

export async function getJWT() {
    return await AsyncStorage.getItem(JWT_KEY);
}

export async function isSignedIn() {
    try {
        console.debug("Checking signed in???");
        var token = await AsyncStorage.getItem('id_token');
        console.debug("token :: " + token);
        if (!token) {
            return false;
        }
        else {  
            return true;
        }
    }
    catch (error) {
        console.log('AsyncStorage error: ' + error.message);
    }

}

export const onSignIn = () => AsyncStorage.setItem(JWT_KEY, "true");

export const onSignOut = () => AsyncStorage.removeItem(JWT_KEY);
