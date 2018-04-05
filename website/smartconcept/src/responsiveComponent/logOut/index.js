import React from 'react';
import { Redirect } from "react-router-dom";

import { AuthService } from "./../../services/authService";

const LogOut = () => {
    AuthService.logOut();
    return (
        <Redirect to="/" />
    );

}

export default LogOut;