import { ServiceConfig } from './config'
import { AuthService } from './authService'

function handleErrors(response) {
    if (response.status === 401) { } //onSignOut();
    if (!response.ok) {
        return response.json()
            .then(response => { throw response });
    }
    return response.json();
}

export const AppointmentService = {
    registerCar: function (carObj) {
        const token = AuthService.isAuthenticated();
        return fetch(
            ServiceConfig.apiUrl + '/appointment/registerCar',
            {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(carObj),
            })
            .then(handleErrors);
    },
    bookAppointment: function (appointmentObj) {
        const token = AuthService.isAuthenticated();
        return fetch(
            ServiceConfig.apiUrl + '/appointment',
            {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(appointmentObj),
            })
            .then(handleErrors);
    },
    cars: function () {
        const token = AuthService.isAuthenticated();
        return fetch(
            ServiceConfig.apiUrl + '/appointment/cars',
            {
                method: 'get',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': token
                }
            })
            .then(handleErrors);
    },
    buildings: function () {
        return fetch(
            ServiceConfig.apiUrl + '/buildings',
            {
                method: 'get'
            })
            .then(handleErrors);
    }
}