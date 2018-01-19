import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { isSignedIn, getJWT } from './app/services/tokenService'
import { createRootNavigator } from './app/rootNavigator'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  async componentWillMount() {
    var some = await getJWT();
    console.debug("some"+ some);
    let isSigned = await isSignedIn();
    this.setState(
      { 
        signedIn: isSigned, 
        checkedSignIn: true 
      }
    );
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Loading please wait......</Text>
        </View>
      );
    }
    const Layout = createRootNavigator(signedIn);
    return (<Layout />);
  }
}

const iconStyles = {
  borderRadius: 10,
  iconStyle: { paddingVertical: 5 },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  text: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  }
});