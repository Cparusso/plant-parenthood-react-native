import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen'
import LandingPage from './screens/LandingPage'
import Plants from './screens/Plants'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  LandingPage: {screen: LandingPage},
  Plants: {screen: Plants},
});

// Tentative Color Scheme: https://coolors.co/50ffb1-48a9a6-35393c-4bc6b9-546d64

const App = createAppContainer(MainNavigator);

export default App;
