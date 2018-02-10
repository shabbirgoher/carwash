import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

export default class RadioButton extends Component {

  getOuterCircleStyle() {
    const { outerCircleSize, outerCircleWidth, outerCircleColor } = this.props;
    return {
      height: outerCircleSize,
      width: outerCircleSize,
      borderRadius: outerCircleSize / 2,
      borderWidth: outerCircleWidth,
      borderColor: outerCircleColor,
    };
  }

  getInnerCircleStyle() {
    const { innerCircleSize, innerCircleColor } = this.props;
    return {
      height: innerCircleSize,
      width: innerCircleSize,
      borderRadius: innerCircleSize / 2,
      backgroundColor: innerCircleColor,
    };
  }

  render() {
    const { accessibilityLabel, onPress, value, currentValue, children } = this.props;
    return (
      <View style={this.props.wrapperStyle}>
      <TouchableWithoutFeedback
        disabled={this.props.disabled}
        accessibilityLabel={accessibilityLabel}
        onPress={() => onPress(value)}
      >
        <View style={styles.circleContainer}>
          <View style={[styles.defaultOuterCircleStyle, this.getOuterCircleStyle()]}>
            { value === currentValue &&
              <View style={this.getInnerCircleStyle()} />
            }
          </View>
          {children}
        </View>
      </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  circleContainer: {
    flexDirection: 'row',
  },
  defaultOuterCircleStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

RadioButton.defaultProps = {
  wrapperStyle: {},
  onPress: () => {},
  outerCircleSize: 24,
  outerCircleWidth: 2,
  innerCircleSize: 12,
  outerCircleColor: '#9eacb4',
  innerCircleColor: '#ff6624',
};