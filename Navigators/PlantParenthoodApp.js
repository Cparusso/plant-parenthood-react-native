import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen'
import DrawerNavigator from './DrawerNavigator'
// import MainTabNavigator from './MainTabNavigator'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Drawers: {screen: DrawerNavigator},
  // Tabs: {screen: MainTabNavigator},
}, {
  initialRouteName: 'Home'
});

// Tentative Color Scheme: https://coolors.co/50ffb1-48a9a6-35393c-4bc6b9-546d64

const PlantParenthoodApp = createAppContainer(MainNavigator)

export default PlantParenthoodApp;
