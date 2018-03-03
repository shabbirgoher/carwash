import React from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import "./style.css";
import { AuthService } from "./../../services/authService";
import InputalidationMessage from './inputalidationMessage';

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const ForgotPassword = () => {
    return (
        <div>Forgot password</div>
    )
}

export default ForgotPassword;
