import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import { FormValidationMessage, Card, Button } from "react-native-elements";

import PackagePeriod from './../components/packagePeriod';
import PackageDaysOffer from './../components/packageDaysOffer';
import PackagePriceOffer from './../components/packagePriceOffer'

export default class ChoosePackage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPackage: '',
            numberOfDays: 0,
            errorMessage: '',
        }
    }

    componentDidMount() {
        if (this.props.screenProps && this.props.screenProps.onRouteActivated)
            this.props.screenProps.onRouteActivated('ChoosePackage');
    }
    next = () => {
        if (!this.state.selectedPackage){
            this.setState({ errorMessage: 'Please select a package.' });
            return;
        }
        if (this.props.screenProps && this.props.screenProps.onPackageSelected)
            this.props.screenProps.onPackageSelected({
                package: this.state.selectedPackage,
            });
        this.props.navigation.navigate('ChooseDays', {numberOfDays: this.state.numberOfDays});
    }

    back = () => {
        this.props.navigation.goBack();
    }

    onSelectPackage = (value) => {
        var numberOfDays = 0;
        if (value.includes('basic'))
            numberOfDays = 2;
        else if (value.includes('advance'))
            numberOfDays = 3;
        else if (value.includes('daily'))
            numberOfDays = 6;
        this.setState({
            selectedPackage: value,
            numberOfDays: numberOfDays
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.packagePeriod}>
                    <PackagePeriod />
                </View>
                <View style={styles.packageDaysOfferPrice}>
                    <View style={styles.packageDaysOffer}>
                        <PackageDaysOffer />
                    </View>
                    <View style={styles.packagePriceOffer}>
                        <PackagePriceOffer onSelectPackage={this.onSelectPackage} />
                    </View>
                </View>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        margin: 5
    },
    packagePeriod: {
        flex: 1,
    },
    packageDaysOfferPrice: {
        flex: 3,
        flexDirection: 'row',
    },
    packageDaysOffer: {
        flex: 1,
        alignSelf: 'center',
    },
    packagePriceOffer: {
        flex: 4,
        alignSelf: 'center',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
    }
});