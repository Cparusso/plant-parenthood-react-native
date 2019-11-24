import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import styled from 'styled-components'

export default function HomeScreen(props) {

  const { navigate } = props.navigation;

  return (
    <MainApp>
      <Header>Plant</Header>
      <Header>Parenthood</Header>
      <ButtonsContainer>
        <Button title="Sign up"/>
        <Button onPress={() => navigate('LandingPage')} title="Log in"/>
      </ButtonsContainer>
    </MainApp>
  )
}

const MainApp = styled.View`
  flex: 1;
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
