import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Feed from '../screens/Feed'
import MainTabNavigator from './MainTabNavigator'

const DrawerNavigator = createDrawerNavigator({
  Home: {screen: MainTabNavigator},
});

export default createAppContainer(DrawerNavigator);
