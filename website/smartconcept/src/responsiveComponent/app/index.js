import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, Row } from 'react-bootstrap';

import Home from "./../home";
import Header from "./../header";
import Footer from "./../footer";
import LoginScreen from './../../screens/login';
import PrivateRoute from './../privateRoute';
import Appointment from './../../screens/appointment';

import './style.css';

const App = () => (
    <Router>
        <Grid fluid={true}>
            <Row>
                <Header />
            </Row>
            <Row style={{ overflowY: 'auto', overflowX: 'hidden' }}>
                <Route exact path="/" component={Home} />
                <Route path="/customer" component={LoginScreen} />
                {/* <Route path="/new-appointment" component={Appointment} /> */}
                <PrivateRoute path="/new-appointment" component={Appointment} />
            </Row>
            <Row>
                <Footer />
            </Row>
        </Grid>
    </Router>
)

export default App;