import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';

import RadioButton from './../useFullComponents/radioButton';

export default class PackagePriceOffer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            package: 0
        }
    }

    handleRadioSelect = (value) => {
        this.setState({ package: value })
        if(this.props.onSelectPackage)
            this.props.onSelectPackage(value);
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={[styles.box, styles.box1]}>
                        <RadioButton 
                            currentValue={this.state.package} 
                            value='basic1Month' 
                            onPress={this.handleRadioSelect} />
                        <Text>OMR 16</Text>
                    </View>
                    <View style={[styles.box, styles.box1]}>
                        <RadioButton 
                            currentValue={this.state.package} 
                            value='basic3Month' 
                            onPress={this.handleRadioSelect} />
                        <Text>OMR 48</Text>
                    </View>
                    <View style={[styles.box, styles.box1]}>
                        <RadioButton currentValue={this.state.package}
                        value='basic6Month'
                        onPress={this.handleRadioSelect} />
                        <Text>OMR 90</Text>
                    </View>
                    <View style={[styles.box, styles.box1]}>
                        <RadioButton 
                            currentValue={this.state.package}
                            value='basic12Month'
                            onPress={this.handleRadioSelect} />
                        <Text>OMR 180</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.box, styles.box2]}>
                        <RadioButton
                            currentValue={this.state.package}
                            value='advance1Month'
                            onPress={this.handleRadioSelect} />
                        <Text>OMR 19</Text>
                    </View>
                    <View style={[styles.box, styles.box2]}>
                        <RadioButton
                            currentValue={this.state.package}
                            value='advance3Month'
                            onPress={this.handleRadioSelect} />
                        <Text>OMR 57</Text>
                    </View>
                    <View style={[styles.box, styles.box2]}>
                        <RadioButton
                            currentValue={this.state.package}
                            value='advance6Month'
                            onPress={this.handleRadioSelect} />
                        <Text>OMR 108</Text>
                    </View>
                    <View style={[styles.box, styles.box2]}>
                        <RadioButton
                            currentValue={this.state.package}
                            value='advance12Month'
                            onPress={this.handleRadioSelect} />
                        <Text>OMR 208</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={[styles.box, styles.box3]}>
                        <RadioButton
                            currentValue={this.state.package}
                            value='daily1Month'
                            onPress={this.handleRadioSelect} />
                        <Text>OMR 37</Text>
                    </View>
                    <View style={[styles.box, styles.box3]}>
                        <RadioButton
                            currentValue={this.state.package}
                            value='daily3Month'
                            onPress={this.handleRadioSelect} />
                        <Text>OMR 110</Text>
                    </View>
                    <View style={[styles.box, styles.box3]}>
                        <RadioButton
                            currentValue={this.state.package}
                            value='daily6Month'
                            onPress={this.handleRadioSelect} />
                        <Text>OMR 210</Text>
                    </View>
                    <View style={[styles.box, styles.box3]}>
                        <RadioButton
                            currentValue={this.state.package}
                            value='daily12Month' 
                            onPress={this.handleRadioSelect} />
                        <Text>OMR 404</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 5,
    },
    box: {
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        borderColor: '#FFF',
        borderWidth: 1
    },
    box1: {
        backgroundColor: '#87ceeb'
    },
    box2: {
        backgroundColor: '#00bfff'
    },
    box3: {
        backgroundColor: '#4682b4'
    }
});