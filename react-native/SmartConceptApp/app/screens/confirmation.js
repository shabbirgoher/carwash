import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
} from 'react-native';
import {
    Card,
    Text,
    Icon,
    Button
} from 'react-native-elements';

import Logout from './../components/login/logout';
const vehicle = {
    carBrand: 'carBrand',
    carModel: 'carModel',
    carType: 'carType',
    licenceNo: 'licenceNo',
    carColor: 'carColor'
};
const address = {
    building: 'building',
    parkingNumber: 'parkingNumber',
    apartment: 'apartment',
};
const packageDetails = "daily12Month";
const days = ['Saturday', 'Monday', 'Tuesday', 'Sunday', 'Thursday', 'Wednesday'];
export default class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // vehicle: vehicle,
            // address: address,
            // package: packageDetails,
            // days: days
            vehicle: this.props.navigation.state.params.vehicle,
            address: this.props.navigation.state.params.address,
            package: this.props.navigation.state.params.package,
            days: this.props.navigation.state.params.days,
        }
    }
    componentDidMount() {
        console.log(this);
    }
    static navigationOptions = ({ navigation }) => ({
        headerTitle: "Confirmation",
        headerTitleStyle: {
            alignSelf: 'center',
            textAlign: 'center',
            width: '100%'
        },
        gesturesEnabled: false,
        headerLeft: null,     
        headerRight: <Logout navigator={navigation} />
    });

    render() {
        return (
            <ScrollView>
                <Card >
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Icon name='check' color='#228b22' />
                        <Text>Booking successful</Text>
                    </View>
                </Card>
                <Card title='Vehicle details'>
                    <View style={styles.content}>
                        <Text style={styles.textLabel}>Brand</Text>
                        <Text style={styles.textValue}>{this.state.vehicle.carBrand}</Text>
                        <Text style={styles.textLabel}>Car Model</Text>
                        <Text style={styles.textValue}>{this.state.vehicle.carModel}</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.textLabel}>Type</Text>
                        <Text style={styles.textValue}>{this.state.vehicle.carType}</Text>
                        <Text style={styles.textLabel}>License no</Text>
                        <Text style={styles.textValue}>{this.state.vehicle.licenceNo}</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.textLabel}>Color</Text>
                        <Text style={styles.textValue}>{this.state.vehicle.carColor}</Text>
                    </View>
                </Card>
                <Card title='Address details'>
                    <View style={styles.content}>
                        <Text style={styles.textLabel}>Building</Text>
                        <Text style={styles.textValue}>{this.state.address.building}</Text>
                        <Text style={styles.textLabel}>Parking number</Text>
                        <Text style={styles.textValue}>{this.state.address.parkingNumber}</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.textLabel}>Appartment</Text>
                        <Text style={styles.textValue}>{this.state.address.apartment}</Text>
                    </View>
                </Card>
                <Card title='Package details'>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.textLabel}>Type</Text>
                        <Text style={styles.textValue}>{
                            this.state.package.includes('basic')
                                ? 'Basic'
                                : this.state.package.includes('advance')
                                    ? 'Advance'
                                    : 'Daily'}
                        </Text>
                        <Text style={styles.textLabel}>Month(s)</Text>
                        <Text style={styles.textValue}>{
                            this.state.package.includes('1Month')
                                ? '1'
                                : this.state.package.includes('3Month')
                                    ? '3'
                                    : this.state.package.includes('6Month')
                                        ? '6'
                                        : '12'}
                        </Text>
                    </View>
                </Card>
                <Card title='Days'>
                    <Text style={{ flexWrap: 'wrap', alignItems: 'center', marginBottom: 3 }}>{this.state.days.join(', ')}</Text>
                    <Button
                        title='HOME'
                        icon={<Icon
                            name='arrow-right'
                            size={15}
                            color='white'/>}
                        buttonStyle={{ backgroundColor: "rgba(92, 99,216, 1)" }}
                        onPress={() => this.props.navigation.navigate('Home')}
                    />
                </Card>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    textLabel: {
        flex: 1
    },
    textValue: {
        flex: 1,
        color: '#228b22'
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',

    }
});