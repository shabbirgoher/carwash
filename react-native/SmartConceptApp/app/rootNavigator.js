import React from 'react';
import { StatusBar, Platform, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './components/home'
import Login from './components/login'
import SignUp from './components/signUp'

const headerStyle = {
  //marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    color: '#333'
  }
});

export const SignedOut = StackNavigator({
  SignIn: {
    screen: Login,
    navigationOptions: {
      headerTitle: "Sign In",
      headerStyle,
      headerTitleStyle:{
        alignSelf:'center',
        textAlign: 'center',
        width: '100%'
      }
    }
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerTitle: "Sign Up",
      headerStyle,
      headerTitleStyle: {
        alignSelf:'center',
        textAlign: 'center',
        width: '100%'
      }
    }
  }
});

export const SignedIn = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: "Home",
      headerStyle,
      headerTitleStyle: {
        alignSelf:'center',
        textAlign: 'center',
        width: '100%'
      }
    }
  }
});

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

//initialRouteName: signedIn ? "SignedIn" : "SignedOut"


