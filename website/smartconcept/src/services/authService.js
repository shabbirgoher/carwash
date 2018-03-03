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
        return localStorage.getItem(JWT_KEY);
    },
    logOut: function(){
        return localStorage.clear();
    }
}