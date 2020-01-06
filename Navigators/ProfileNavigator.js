import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Profile from '../screens/Profile'
import UserPlantDetails from '../screens/UserPlantDetails'

const MainNavigator = createStackNavigator({
  Profile: {screen: Profile},
  Plant: {screen: UserPlantDetails},
}, {
  initialRouteName: 'Profile',
  headerMode: 'none',
})

// Tentative Color Scheme: https://coolors.co/50ffb1-48a9a6-35393c-4bc6b9-546d64

const ProfileNavigator = createAppContainer(MainNavigator)

export default ProfileNavigator;
