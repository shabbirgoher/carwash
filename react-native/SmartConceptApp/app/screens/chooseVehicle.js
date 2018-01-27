import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import {
    Card,
    Button,
    FormLabel,
    FormInput,
    FormValidationMessage,
    ButtonGroup
} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ChooseVehicle extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }
    componentDidMount(){
        if(this.props.screenProps && this.props.screenProps.onRouteActivated)
            this.props.screenProps.onRouteActivated('ChooseVehicle');
    }

    next = () => {
        this.props.navigation.navigate('ChooseAddress');
    }

    render(){
        return (
            <View style={styles.container}>
               <Card>
                    <FormLabel>Choose Vehicle</FormLabel>
                    <FormInput maxLength={30}
                        //onChangeText={this.onEmailAddrChange}
                        //keyboardType='email-address'
                        //onEndEditing={this.onEndEditing}    
                    />
                    <FormValidationMessage>{this.state.emailError}</FormValidationMessage>
                    <Button
                        buttonStyle={{ marginTop: 20 }}
                        backgroundColor="#03A9F4"
                        title="NEXT"
                        onPress={this.next}
                        disabled= {this.state.isLoading}
                    />
                    <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'stretch',
        justifyContent: 'space-between'
        
    }
});