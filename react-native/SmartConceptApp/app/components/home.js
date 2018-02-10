import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';

import Status from './../useFullComponents/status'
import { Appointment } from './../navigators/appointmentNavigator'
import Logout from './../components/login/logout';

const selectedColor = '#b22222';
const blankColor = 'rgba(0,0,0,.09)';
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ChooseVehicleColor: selectedColor,
            ChooseAddressColor: blankColor,
            ChooseDaysColor: blankColor,
            ChoosePackageColor: blankColor
        };
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Home",
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            width: '100%'
        },
        headerRight: <Logout navigator={navigation} />
    });

    onRouteActivated = (routeName) => {
        this.setState({
            ChooseVehicleColor: blankColor,
            ChooseAddressColor: blankColor,
            ChooseDaysColor: blankColor,
            ChoosePackageColor: blankColor
        });
        const activeRouteColor = {};
        activeRouteColor[routeName + 'Color'] = selectedColor;
        this.setState(activeRouteColor);
    }
    onVehicleSelected = (vehicleObj) => {}
    onAddressSelected = (addressObj) => {}
    onPackageSelected = (packageObj) => {
        
    }
    onDaysSelected = (daysObj) => {}
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Status color={this.state.ChooseVehicleColor} textLine1='Choose' textLine2='Vehicle' />
                    <Status color={this.state.ChooseAddressColor} textLine1='Choose' textLine2='Address' />
                    <Status color={this.state.ChoosePackageColor} textLine1='Choose' textLine2='Package' />
                    <Status color={this.state.ChooseDaysColor} textLine1='Choose' textLine2='Days' />
                </View>
                <View style={styles.bottom}>
                    <Appointment
                        screenProps={{ 
                            onRouteActivated: this.onRouteActivated,
                            onVehicleSelected: this.onVehicleSelected,
                            onAddressSelected: this.onAddressSelected,
                            onPackageSelected: this.onPackageSelected,
                            onDaysSelected: this.onDaysSelected
                            }} />
                </View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    activeRoute: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    top: {
        flex: 1,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    bottom: {
        flex: 5,
        backgroundColor: '#FFF',
    }
});