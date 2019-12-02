import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen'
import Feed from './screens/Feed'
import Plants from './screens/Plants'
import PlantDetails from './screens/PlantDetails'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Feed: {screen: Feed},
  Plants: {screen: Plants},
  Plant: {screen: PlantDetails},
});

// Tentative Color Scheme: https://coolors.co/50ffb1-48a9a6-35393c-4bc6b9-546d64

const PlantParenthoodApp = createAppContainer(MainNavigator)

export default PlantParenthoodApp;
