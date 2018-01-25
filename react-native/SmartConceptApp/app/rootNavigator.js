import React from 'react';
import { StatusBar, Platform, StyleSheet, Text } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { FontAwesome } from "react-native-vector-icons";

import Home from './components/home'
import Login from './components/login'
import SignUp from './components/signUp'
import AppointmentHistory from './components/history'
import CompeleteProfile from './components/completeProfile'

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
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
      headerTitleStyle:{
        alignSelf:'center',
        textAlign: 'center',
        width: '100%'
      }
    }
  }
});

export const SignedIn = TabNavigator(
  {
    CompeleteProfile: {
      screen: CompeleteProfile,
      navigationOptions: {
        
        tabBarLabel: "Complete Your Profile",
        tabBarIcon: ({ tintColor }) =>
          <FontAwesome name="home" size={30} color={tintColor} />            
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
);



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


