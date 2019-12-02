import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import styled from 'styled-components'

export default function Feed(props) {

  const { navigate, push, goBack, popToTop } = props.navigation;

  return (
    <MainApp>
      <Header>Feed</Header>
      <Button onPress={() => navigate('Plants')} title="Plants"/>
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
