import React from "react";
import { Redirect, Route } from "react-router-dom";

import { AuthService } from "./../../services/authService";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            AuthService.isAuthenticated() ? (
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