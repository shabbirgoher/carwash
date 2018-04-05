import decode from 'jwt-decode';

import { ServiceConfig } from './config'

const JWT_KEY = 'id_token';

function handleErrors(response) {
    if (response.status === 401) { } //onSignOut();
    if (!response.ok) {
        return response.json()
            .then(response => { throw response });
    }
    return response.json();
}

function isExpired(token){
    try {
        const decoded = decode(token);
        if (decoded.exp > Date.now() / 1000) { // Checking if token is expired. N
            return true;
        }
        else
            return false;
    }
    catch (err) {
        return false;
    }
}

export const AuthService = {
    onLocalLogin: function (object) {
        return fetch(
            ServiceConfig.apiUrl + '/auth/localLogin',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(object),
            })
            .then(handleErrors)
            .then((response) => {
                localStorage.setItem(JWT_KEY, response.token);
                return response;
            });
    },
    onSignUp: function(object){
        return fetch(
            ServiceConfig.apiUrl + '/auth/localSignUp',
            {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(object),
            })
            .then(handleErrors)
            .then((response) => {
                localStorage.setItem(JWT_KEY, response.token);
                return response;
            });
    },
    isAuthenticated: function(){
        return isExpired(this.getToken());
    },
    getToken: function(){
        return localStorage.getItem(JWT_KEY);
    },
    logOut: function(){
        return localStorage.clear();
    },
    onRegeneratePassword: function(object){
        return fetch(
            ServiceConfig.apiUrl + '/auth/regeneratePassword',
            {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(object),
            })
            .then(handleErrors);
    },
    onResetPassword: function(token, object){
        return fetch(
            ServiceConfig.apiUrl + '/auth/resetPassword',
            {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(object),
            })
            .then(handleErrors)
            .then((response) => {
                localStorage.setItem(JWT_KEY, response.token);
                return response;
            });
    }
}