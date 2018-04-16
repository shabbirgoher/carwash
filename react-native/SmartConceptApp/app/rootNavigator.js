import React from 'react';
import { StatusBar, Platform, StyleSheet } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from './components/home';
import Confirmation from './screens/confirmation';
import LoginScreen from './screens/loginScreen';
import SocialSignUp from './components/login/socialSignUp';
import Logout from './components/login/logout';
import MenuButton from './useFullComponents/menuButton';

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
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: "Sign In",
      headerStyle,
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        width: '100%'
      }
    }
  },
  SocialSignUp: {
    screen: SocialSignUp,
    navigationOptions: {
      headerTitle: "Sign Up",
      headerStyle,
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign: 'center',
        width: '100%'
      }
    }
  }
});

export const HomeNavigator = StackNavigator({
  Home: {
    screen: Home
  },
  Confirmation: {
    screen: Confirmation
  }
},
  {
    initialRouteName: 'Home',
    navigationOptions: ({ navigation }) => ({
      headerLeft: <MenuButton navigate={navigation.navigate} />,
    })
  }
);

export const SignedIn = DrawerNavigator({
  Book: {
    screen: HomeNavigator
  },
  Logout: {
    screen: Logout
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
}