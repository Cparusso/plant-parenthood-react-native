import React from 'react'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Plants from '../screens/Plants'
import PlantDetails from '../screens/PlantDetails'

const MainNavigator = createStackNavigator({
  Plants: {screen: Plants},
  Plant: {screen: PlantDetails},
}, {
  initialRouteName: 'Plants'
});

// Tentative Color Scheme: https://coolors.co/50ffb1-48a9a6-35393c-4bc6b9-546d64

const PlantsNavigator = createAppContainer(MainNavigator)

export default PlantsNavigator;
