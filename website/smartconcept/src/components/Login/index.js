import React from "react";
import { Route, Link } from "react-router-dom";

import "./style.css";
import Login from './login';
import Register from './register';
import ForgotPassword from './forgotPassword';

const LoginScreen = ({ match }) => {
    return (
            <div className="Login">
                <ul style={HeaderCss}>
                    <li style={LinkCss}>
                        <Link to='/sign-in'>Sign In</Link>
                    </li>
                    <li style={LinkCss}>
                        <Link to={`${match.url}/register`}>Register</Link>
                    </li>
                    <li style={LinkCss}>
                        <Link to={`${match.url}/forgot-password`}>Forgot password</Link>
                    </li>
                </ul>

                <div>
                    <Route exact path='/sign-in' component={Login} />
                    <Route path='/sign-in/register' component={Register} />
                    <Route path='/sign-in/forgot-password' component={ForgotPassword} />
                </div>
            </div>

    );
}

const HeaderCss = {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    listStyleType: 'none',
    justifyContent: 'center'
}

const LinkCss = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid',
    borderRadius: '5px',
    alignItems: 'center',
    textAlign: 'center'
}
export default LoginScreen;