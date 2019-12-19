import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Feed from '../screens/Feed'
import Profile from '../screens/Profile'
import PlantsNavigator from './PlantsNavigator'

const TabNavigator = createBottomTabNavigator({
  Feed: {screen: Feed},
  Plants: {screen: PlantsNavigator},
  Profile: {screen: Profile},
},{
  resetOnBlur: true,
}
);

export default createAppContainer(TabNavigator);
