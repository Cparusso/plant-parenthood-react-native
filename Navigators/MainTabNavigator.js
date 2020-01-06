import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Feed from '../screens/Feed'
import ProfileNavigator from './ProfileNavigator'
import PlantsNavigator from './PlantsNavigator'

const TabNavigator = createBottomTabNavigator({
  Profile: {screen: ProfileNavigator},
  Plants: {screen: PlantsNavigator},
  Feed: {screen: Feed},
}, {
  resetOnBlur: true,
})

export default createAppContainer(TabNavigator)
