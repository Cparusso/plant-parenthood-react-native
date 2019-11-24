import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import styled from 'styled-components'

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

// Tentative Color Scheme: https://coolors.co/50ffb1-48a9a6-35393c-4bc6b9-546d64

export default function App() {
  return (
    <MainApp>
      <Header>Plant</Header>
      <Header>Parenthood</Header>
      <ButtonsContainer>
        <Button title="Sign up"/>
        <Button title="Log in"/>
      </ButtonsContainer>
    </MainApp>
  )
}

const MainApp = styled.View`
  flex: 1;
  background-color: #50FFB1;
  align-items: center;
  justify-content: center;
`

const Header = styled.Text`
  color: #35393C;
  font-weight: bold;
  font-size: 40;
  text-align: center;
`

const ButtonsContainer = styled.View`
  flex-direction: row;
`
