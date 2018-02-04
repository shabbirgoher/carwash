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

export function onSignUp(token, object, callback){
    return fetch(
        'http://10.0.2.2:3000/auth/signUp', 
        {
            method: 'post',
            headers: {
                'Authorization': token,
                'content-type': 'application/json'
            },
            body: JSON.stringify(object),
        }
    ).then((response) => response.json())
    .then(function(responseJson){
        return responseJson;
    });
}

function handleErrors(response) {
    if (!response.ok) {
        return response.json()
            .then(response => {throw response});
    }
    return response.json();
}

export function onRegeneratePassword(object) {
    return fetch(
        'http://10.0.2.2:3000/auth/regeneratePassword',
        {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(object),
        })
        .then(handleErrors);
}

export function onResetPassword(token, object){
    return fetch(
        'http://10.0.2.2:3000/auth/resetPassword',
        {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(object),
        })
        .then(handleErrors);
}

export function onLocalLogin(object){
    return fetch(
        'http://10.0.2.2:3000/auth/localLogin',
        {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(object),
        })
        .then(handleErrors);
}

export function onLocalSignUp(object){
    return fetch(
        'http://10.0.2.2:3000/auth/localSignUp',
        {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(object),
        })
        .then(handleErrors);
}

export const onSignOut = () => AsyncStorage.removeItem(JWT_KEY);