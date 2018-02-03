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

const SCREEN_WIDTH = Dimensions.get('window').width;
const brands = [
    "None",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
];
export default class ChooseVehicle extends Component{

    constructor(props){
        super(props);
        this.state = {
            carBrand: 'None',
            carBrandError: '',
            carModel: '',
            carModelError: '',
            carType: 'None',
            carTypeError: '',
            licenceNo: '',
            licenceNoError: '',
            carColor: '',
            carColorError: '',
            errorMessage:'',
        };
    }
    componentDidMount(){
        if(this.props.screenProps && this.props.screenProps.onRouteActivated)
            this.props.screenProps.onRouteActivated('ChooseVehicle');
    }

    next = () => {
        if(this.isNone(this.state.carBrand)
            || !this.isAlphanumeric(this.state.carColor)
            || !this.isAlphanumeric(this.state.carModel)
            || this.isNone(this.state.carType)
            || !this.isAlphanumeric(this.state.licenceNo)){
                this.setState({errorMessage: 'Please correct above details.'});
        }
        else{
            this.props.navigation.navigate('ChooseAddress');            
        }
    }

    isAlphanumeric(value)
    { 
        var letters = /^[0-9a-zA-Z\s]+$/;
        return value.match(letters);
    }

    isNone(value){
        return value === 'None';
    }

    carModelEntered = () => {
        if(!this.isAlphanumeric(this.state.carModel)){
            this.setState({
                carModelError: 'Please enter a alpha numeric car model.'
            });
        }else{
            this.setState({
                carModelError: ''
            });
        }
    }
    
    licenceNoEntered = () => {
        if(!this.isAlphanumeric(this.state.licenceNo)){
            this.setState({
                licenceNoError: 'Please enter a alpha numeric licence number.'
            });
        }else{
            this.setState({
                licenceNoError: ''
            });
        }
    }

    carColorEntered = () => {
        if(!this.isAlphanumeric(this.state.carColor)){
            this.setState({
                carColorError: 'Please enter a alpha numeric car colour.'
            });
        }else{
            this.setState({
                carColorError: ''
            });
        }
    }

    carBrandSelected = (itemValue, itemIndex) => {
        this.setState({carBrand: itemValue});
        if(this.isNone(itemValue)){
            this.setState({
                carBrandError: 'Please select your car brand'
            });
        }else{
            this.setState({
                carBrandError: ''
            });
        }
    }

    carTypeSelected = (itemValue, itemIndex) => {
        this.setState({carType: itemValue});
        if(this.isNone(itemValue)){
            this.setState({
                carTypeError: 'Please select your car type'
            });            
        }else{
            this.setState({
                carTypeError: ''
            });
        }
    }

    render(){
        return (
            <ScrollView style={styles.container}>
               <Card>
                    <FormLabel>Car Brand</FormLabel>
                    <View style={styles.pickerContainer}>
                        <Picker
                            style={{ width: SCREEN_WIDTH - 100, height: 40 }}
                            selectedValue={this.state.carBrand}
                            onValueChange={this.carBrandSelected}>
                            {brands.map((item, index) => {
                                return (< Picker.Item label={item} value={item} key={index}/>);
                            })}   
                        </Picker>
                    </View>
                    <FormValidationMessage>{this.state.carBrandError}</FormValidationMessage>

                    <FormLabel>Car Model</FormLabel>
                    <FormInput onEndEditing={this.carModelEntered} 
                        onChangeText={text => this.setState({carModel: text})}/>
                    <FormValidationMessage>{this.state.carModelError}</FormValidationMessage>

                    <FormLabel>Car Type</FormLabel>
                    <View style={styles.pickerContainer}>
                        <Picker
                            style={{ width: SCREEN_WIDTH - 100, height: 40 }}
                            selectedValue={this.state.carType}
                            onValueChange={this.carTypeSelected}>
                            <Picker.Item label='None' value='None' key={0}/>
                            <Picker.Item label='SUV' value='SUV' key={1}/>
                            <Picker.Item label='SALOON' value='SALOON' key={2}/>
                        </Picker>
                    </View>
                    <FormValidationMessage>{this.state.carTypeError}</FormValidationMessage>                    
                    
                    <FormLabel>Licence Plate</FormLabel>
                    <FormInput onEndEditing={this.licenceNoEntered} 
                        onChangeText={text => this.setState({licenceNo: text})}/>
                    <FormValidationMessage>{this.state.licenceNoError}</FormValidationMessage>
                    
                    <FormLabel>Colour</FormLabel>
                    <FormInput onEndEditing={this.carColorEntered} 
                        onChangeText={text => this.setState({carColor: text})}/>
                    <FormValidationMessage>{this.state.carColorError}</FormValidationMessage>

                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="NEXT"
                        onPress={this.next}
                        disabled= {this.state.isLoading}
                    />
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
    }
});