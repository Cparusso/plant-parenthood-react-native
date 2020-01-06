import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Feed from '../screens/Feed'
import Profile from '../screens/Profile'
import PlantsNavigator from './PlantsNavigator'

const TabNavigator = createBottomTabNavigator({
  Profile: {screen: Profile},
  Plants: {screen: PlantsNavigator},
  Feed: {screen: Feed},
}, {
  resetOnBlur: true,
})

export default createAppContainer(TabNavigator)
