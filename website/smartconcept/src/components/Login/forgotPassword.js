import React, {Component} from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import "./style.css";
import { AuthService } from "./../../services/authService";
import InputalidationMessage from './inputalidationMessage';

const emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export default class ForgotPassword extends Component {
    componentWillMount(){
        this.props.activate();
    }

    render(){
        return (
            <div>Forgot password</div>
        )
    }
}