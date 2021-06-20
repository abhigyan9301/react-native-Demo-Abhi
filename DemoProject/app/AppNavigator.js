import React from 'react';
import { Dimensions, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeContainer from './Components/Home/HomeContainer';
import DetailsContainer from './Components/Details/DetailsContainer';



export const MainStack = createStackNavigator(
  {

    HomeContainer: {
      screen: HomeContainer,
      navigationOptions: {
        headerShown: false,
        gestureEnabled: false
      }
    },
    
    DetailsContainer: {
      screen: DetailsContainer,
      navigationOptions: {
        headerShown: false,
        gestureEnabled: false
      }
    }
  },  
  {
    headerMode: 'none'
  }
);



export const SwitchNavigator = createSwitchNavigator(
  {
    //AuthLoading: AuthLoadingScreen,
    MainStack: MainStack,
    //VerifyUser: VerifyOTPStack,
   // App: Drawer
  },
  {
    initialRouteName: 'MainStack'
  }
);

export const AppContainer = createAppContainer(SwitchNavigator);


