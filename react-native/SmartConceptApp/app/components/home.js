import React, { Component } from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import {NavigationActions} from 'react-navigation';

import Status from './../useFullComponents/status'
import { Appointment } from './../navigators/appointmentNavigator'
import Logout from './../components/login/logout';
import { submitAppointment, getJWT } from './../services/tokenService';

const selectedColor = '#b22222';
const blankColor = 'rgba(0,0,0,.09)';
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ChooseVehicleColor: selectedColor,
            ChooseAddressColor: blankColor,
            ChooseDaysColor: blankColor,
            ChoosePackageColor: blankColor,
            vehicle: {},
            address: {},
            package: '',
            days: []
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
    resetNavigation(targetRoute, data) {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: targetRoute, params: data }),
            ],
        });
        this.props.navigation.dispatch(resetAction);
    }
    onVehicleSelected = (vehicleObj) => this.setState({ vehicle: vehicleObj });
    onAddressSelected = (addressObj) => this.setState({ address: addressObj });
    onPackageSelected = (packageObj) => this.setState({ package: packageObj.package });
    onDaysSelected = async (days) => {
        this.setState({ days: days });
        const token = await getJWT();
        const data = {
            vehicle: this.state.vehicle,
            address: this.state.address,
            package: this.state.package,
            days: this.state.days,
        };
        submitAppointment(
            token,
            data
        ).then(() => this.resetNavigation('Confirmation', data))
            .catch(err => {
                alert('Something went wrong, please try after sometime or contact adminitrator');
                console.error('An error occured while saving data ::\n' + err);
            })
    }

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