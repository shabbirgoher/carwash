import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {
    CheckBox,
    Button,
    Text,
    FormValidationMessage,
    Card,
} from 'react-native-elements';

const days = [
    'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'
];
export default class ChooseDays extends Component {
    constructor(props) {
        super(props);
        this.state = { days: [], errorMessage: '' };
    }
    componentDidMount() {
        if (this.props.screenProps && this.props.screenProps.onRouteActivated)
            this.props.screenProps.onRouteActivated('ChooseDays');
    }
    next = () => {
        if (this.state.days.length != this.props.navigation.state.params.numberOfDays) {
            this.setState({
                errorMessage: 'Please select ' + this.props.navigation.state.params.numberOfDays + ' days'
            });
            return;
        }
        if (this.props.screenProps && this.props.screenProps.onDaysSelected)
            this.props.screenProps.onDaysSelected(this.state.days);
    }
    back = () => this.props.navigation.goBack()
    checkBoxClicked = (value) => {
        var days = this.state.days;
        if (days.includes(value))
            days = days.filter(day => day !== value);
        else if (this.state.days.length >= this.props.navigation.state.params.numberOfDays) {
            alert("You can select max " + this.props.navigation.state.params.numberOfDays + " days");
            return;
        }
        else
            days.push(value);
        this.setState({ days: days });
    }
    render() {
        return (
            <Card style={styles.container}>
                <Text>Choose any {this.props.navigation.state.params.numberOfDays} days</Text>
                {
                    days.map(
                        (value) =>
                            <CheckBox
                                title={value}
                                checked={this.state.days.includes(value)}
                                onIconPress={() => this.checkBoxClicked(value)}
                                key={value}
                            />
                    )
                }
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
                        title="SUBMIT"
                        onPress={this.next}
                        disabled={this.state.isLoading}
                    />
                </View>
                <FormValidationMessage>{this.state.errorMessage}</FormValidationMessage>
            </Card>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
    }
});