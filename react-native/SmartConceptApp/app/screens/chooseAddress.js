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

const clusters = [
    {name: 'None', towers: []},
    {name: 'A', towers: ['a1', 'a2', 'a3']},
    {name: 'B', towers: ['b1', 'b2']},
    {name: 'C', towers: ['c1']},
    {name: 'D', towers: ['d1', 'd2']},
    {name: 'E', towers: ['e1', 'e2', 'e3']}
];
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class ChooseAddress extends Component{
    constructor(props){
        super(props);
        this.state = {
            cluster: 'None',
            clusterError: '',
            towerName: 'None',
            towerNameError: '',
            apartment: '',
            apartmentError: ''
        };
    }

    componentDidMount(){
        if(this.props.screenProps && this.props.screenProps.onRouteActivated)
            this.props.screenProps.onRouteActivated('ChooseAddress');
    }
    next = () => {
        if(this.isNone(this.state.cluster)
            || this.isNone(this.state.towerName)
            || !this.isAlphanumeric(this.state.apartment)){
                this.setState({errorMessage: 'Please correct above details.'});
        }
        else{
            if(this.props.screenProps && this.props.screenProps.onAddressSelected)
                this.props.screenProps.onAddressSelected({
                    cluster: this.state.cluster,
                    towerName: this.state.towerName,
                    apartment: this.state.apartment,
                });
            this.props.navigation.navigate('ChoosePackage');            
        }
    }

    back = () => {
        this.props.navigation.goBack();
    }

    isAlphanumeric(value)
    { 
        var letters = /^[0-9a-zA-Z\s]+$/;
        return value.match(letters);
    }

    isNone(value){
        return value === 'None';
    }

    apartmentEntered = () => {
        if(!this.isAlphanumeric(this.state.apartment)){
            this.setState({
                apartmentError: 'Please enter your apartment'
            });
        }else{
            this.setState({
                apartmentError: ''
            });
        }
    }

    clusterSelected = (itemValue, itemIndex) => {
        this.setState({cluster: itemValue});        
        if(this.isNone(itemValue)){
            this.setState({
                clusterError: 'Please select your cluster.'
            });
        }else{
            this.setState({
                clusterError: ''
            });
        }
    }

    towerNameSelected = (itemValue, itemIndex) => {
        this.setState({towerName: itemValue});
        if(this.isNone(itemValue)){
            this.setState({
                towerNameError: 'Please select your tower'
            });            
        }else{
            this.setState({
                towerNameError: ''
            });
        }
    }
    render(){
        return (
            <ScrollView style={styles.container}>
               <Card>
                    <FormLabel>Cluster</FormLabel>
                    <View style={styles.pickerContainer}>
                        <Picker
                            style={{ width: SCREEN_WIDTH - 100, height: 40 }}
                            selectedValue={this.state.cluster}
                            onValueChange={this.clusterSelected}>
                            {clusters.map(c => c.name).map((item, index) => {
                                return (< Picker.Item label={item} value={item} key={index}/>);
                            })}   
                        </Picker>
                    </View>
                    <FormValidationMessage>{this.state.clusterError}</FormValidationMessage>
                    
                    <FormLabel>Tower Name</FormLabel>
                    <View style={styles.pickerContainer}>
                        <Picker
                            style={{ width: SCREEN_WIDTH - 100, height: 40 }}
                            selectedValue={this.state.towerName}
                            onValueChange={this.towerNameSelected}>
                            {clusters.filter(c => c.name === this.state.cluster)[0].towers.map((item, index) => {
                                return (< Picker.Item label={item} value={item} key={index}/>);
                            })}   
                        </Picker>
                    </View>
                    <FormValidationMessage>{this.state.towerNameError}</FormValidationMessage>

                    <FormLabel>Apartment</FormLabel>
                    <FormInput onEndEditing={this.apartmentEntered} 
                        onChangeText={text => this.setState({apartment: text})}/>
                    <FormValidationMessage>{this.state.apartmentError}</FormValidationMessage>
                    
                    <View style={styles.buttonContainer}>
                        <Button
                            buttonStyle={{ marginTop: 20 }}
                            backgroundColor="#03A9F4"
                            title="BACK"
                            onPress={this.back}
                            disabled= {this.state.isLoading}
                        />
                        <Button
                            buttonStyle={{ marginTop: 20 }}
                            backgroundColor="#03A9F4"
                            title="NEXT"
                            onPress={this.next}
                            disabled= {this.state.isLoading}
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