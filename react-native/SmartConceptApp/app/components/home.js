import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Platform,
    StatusBar
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import ChooseVehicle from './../screens/chooseVehicle';
import ChooseAddress from './../screens/chooseAddress';
import ChoosePackage from './../screens/choosePackage';
import ChooseDays from './../screens/chooseDays';

export const Appointment = StackNavigator({
    ChooseVehicle: {
        screen: ChooseVehicle,
        navigationOptions: {
            header: null,
        }
    },
    ChooseAddress: {
        screen: ChooseAddress,
        navigationOptions: {
            header: null,
        }
    },
    ChoosePackage: {
        screen: ChoosePackage,
        navigationOptions: {
            header: null,
        }
    },
    ChooseDays: {
        screen: ChooseDays,
        navigationOptions: {
            header: null,
        }
    },
});
const selectedColor = '#b22222';
const blankColor = 'rgba(0,0,0,.09)';
export default class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
                ChooseVehicleColor: selectedColor,
                ChooseAddressColor: blankColor,
                ChooseDaysColor: blankColor,
                ChoosePackageColor: blankColor     
        };
    }
    onRouteActivated = (routeName) => {
        this.setState({
                ChooseVehicleColor: blankColor,
                ChooseAddressColor: blankColor,
                ChooseDaysColor: blankColor,
                ChoosePackageColor: blankColor        
        });
        const activeRouteColor = {};
        activeRouteColor[routeName+'Color'] = selectedColor;
        this.setState(activeRouteColor);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <View style={styles.activeRoute}>
                        <Icon name="circle" size={50} color={this.state.ChooseVehicleColor} />
                        <Text>Choose</Text>
                        <Text>Vehicle</Text>
                    </View>                    
                    {/* <Icon name="arrow-right" size={30} color={'#03A9F4'} /> */}
                    <View style={styles.activeRoute}>                
                        <Icon name="circle" size={50} color={this.state.ChooseAddressColor} />
                        <Text>Choose</Text>
                        <Text>Address</Text>                        
                    </View>
                    {/* <Icon name="arrow-right" size={30} color={'#03A9F4'} /> */}
                    <View style={styles.activeRoute}>                    
                        <Icon name="circle" size={50} color={this.state.ChoosePackageColor} />
                        <Text>Choose</Text>
                        <Text>Package</Text>                                                
                    </View>
                    {/* <Icon name="arrow-right" size={30} color={'#03A9F4'} />                                            */}
                    <View style={styles.activeRoute}>                
                        <Icon name="circle" size={50} color={this.state.ChooseDaysColor} />
                        <Text>Choose</Text>
                        <Text>Days</Text>                        
                    </View>
                </View>
                <View style={styles.bottom}>
                    <Appointment screenProps={{onRouteActivated: this.onRouteActivated}}/>
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
        flex: 4,
        backgroundColor: '#FFF',
    }
});