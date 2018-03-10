import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Grid, Row, Col } from 'react-bootstrap';

// import NavigationBar from "./../navigationBar";
// import About from "./../about";
import Home from "./../home";
import Header from "./../header";
// import OurGoal from "./../our-goal";
// import Contactus from "./../contact-us";
// import LoginScreen from "./../Login";
// import LogOut from "./../logOut";
// import PrivateRoute from './../privateRoute';
// import NewAppointment from './../newAppointment';
import './style.css';

const App = () => (
    <Router>
        <Grid fluid={true}>
            <Row>
                <Header />
            </Row>
            <Row style={{ overflowY: 'auto', overflowX: 'hidden'}}>
                <Route exact path="/" component={Home} />
            </Row>
        </Grid>
    </Router>
)

export default App;