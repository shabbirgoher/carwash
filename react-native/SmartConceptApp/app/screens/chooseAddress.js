import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
    Picker,
    Dimensions,
    ScrollView,
} from 'react-native';
import {
    Card,
    Button,
    FormLabel,
    FormInput,
    FormValidationMessage,

} from "react-native-elements";

import { getBuildingList } from './../services/tokenService';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class ChooseAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            building: 'None',
            buildingError: '',
            parkingNumber: '',
            parkingNumberError: '',
            apartment: '',
            apartmentError: '',
            buildings: []
        };
    }

    componentDidMount() {
        if (this.props.screenProps && this.props.screenProps.onRouteActivated)
            this.props.screenProps.onRouteActivated('ChooseAddress');

        getBuildingList()
            .then(res => this.setState({ buildings: ['None'].concat(res) }))
            .catch(err => {
                console.error('Unable to load vehciles');
            })
    }
    next = () => {
        this.setState({ errorMessage: '' });
        if (this.isNone(this.state.building)
            || !this.isAlphanumeric(this.state.parkingNumber)
            || !this.isAlphanumeric(this.state.apartment)) {
            this.setState({ errorMessage: 'Please correct above details' });
        }
        else {
            if (this.props.screenProps && this.props.screenProps.onAddressSelected)
                this.props.screenProps.onAddressSelected({
                    building: this.state.building,
                    parkingNumber: this.state.parkingNumber,
                    apartment: this.state.apartment,
                });
            this.props.navigation.navigate('ChoosePackage');
        }
    }

    back = () => {
        this.props.navigation.goBack();
    }

    isAlphanumeric(value) {
        var letters = /^[0-9a-zA-Z\s]+$/;
        return value.match(letters);
    }

    isNone(value) {
        return value === 'None';
    }

    apartmentEntered = () => {
        if (!this.isAlphanumeric(this.state.apartment)) {
            this.setState({
                apartmentError: 'Please enter your apartment'
            });
        } else {
            this.setState({
                apartmentError: ''
            });
        }
    }

    buildingSelected = (itemValue, itemIndex) => {
        this.setState({ building: itemValue });
        if (this.isNone(itemValue)) {
            this.setState({
                buildingError: 'Please select your building'
            });
        } else {
            this.setState({
                buildingError: ''
            });
        }
    }

    parkingNumberEntered = () => {
        if (!this.isAlphanumeric(this.state.parkingNumber)) {
            this.setState({
                parkingNumberError: 'Please enter your parking number'
            });
        } else {
            this.setState({
                parkingNumberError: ''
            });
        }
    }
    render() {
        return (
            <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
                <Card>
                    <FormLabel>Building</FormLabel>
                    <View style={styles.pickerContainer}>
                        <Picker
                            style={{ width: SCREEN_WIDTH - 100, height: 40 }}
                            selectedValue={this.state.building}
                            onValueChange={this.buildingSelected}>
                            {this.state.buildings.map((item, index) => {
                                return (< Picker.Item label={item} value={item} key={index} />);
                            })}
                        </Picker>
                    </View>
                    <FormValidationMessage>{this.state.buildingError}</FormValidationMessage>

                    <FormLabel>Parking number</FormLabel>
                    <FormInput onEndEditing={this.parkingNumberEntered}
                        onChangeText={text => this.setState({ parkingNumber: text })} />
                    <FormValidationMessage>{this.state.parkingNumberError}</FormValidationMessage>

                    <FormLabel>Apartment</FormLabel>
                    <FormInput onEndEditing={this.apartmentEntered}
                        onChangeText={text => this.setState({ apartment: text })} />
                    <FormValidationMessage>{this.state.apartmentError}</FormValidationMessage>

                    <View style={styles.buttonContainer}>
                        <Button
                            buttonStyle={{ marginTop: 20 }}
                            backgroundColor="#03A9F4"
                            title="BACK"
                            onPress={this.back}
                            disabled={this.state.isLoading}
                        />
                        <Button
                            buttonStyle={{ marginTop: 20 }}
                            backgroundColor="#03A9F4"
                            title="NEXT"
                            onPress={this.next}
                            disabled={this.state.isLoading}
                        />
                    </View>
                    <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
                </Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    pickerContainer: {
        alignSelf: 'center',
        marginLeft: 10,
        borderBottomWidth: 1,
        borderColor: 'rgba(171, 189, 219, 1)',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
    }
});