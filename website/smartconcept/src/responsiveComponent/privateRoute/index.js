import React from "react";
import { Redirect, Route } from "react-router-dom";
import decode from 'jwt-decode';

import { AuthService } from "./../../services/authService";
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
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isExpired(AuthService.isAuthenticated()) ? (
                <Component {...props} />
            ) : (
                    <Redirect
                        to={{
                            pathname: "/customer/sign-in",
                            state: { from: props.location }
                        }}
                    />
                )
        }
    />
);

export default PrivateRoute;