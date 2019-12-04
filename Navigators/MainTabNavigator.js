import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Feed from '../screens/Feed'
import PlantsNavigator from './PlantsNavigator'

const TabNavigator = createBottomTabNavigator({
  Feed: {screen: Feed},
  Plants: {screen: PlantsNavigator},
});

export default createAppContainer(TabNavigator);
