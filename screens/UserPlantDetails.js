import React, { useState, useEffect } from 'react'
import { Text, View, Button, ScrollView, Image } from 'react-native'
import styled from 'styled-components'

export default function UserPlantDetails({ navigation }) {

  const plantInfo = navigation.getParam('plantInfo')

  const deleteUserPlant = () => {
    // fetch('http://localhost:3000/user_plants', {
    fetch(`http://taco.local:3000/user_plants/${plantInfo.userPlantId}`, {
      method: 'DELETE',
    })

    navigation.navigate('Profile')
  }

  return (
    <ScrollView>
    <MainApp>
      <BigPic source={{uri: plantInfo.picture}}/>
      <Header>{ plantInfo.givenName }</Header>
      <Text>Last Watered: { plantInfo.dateWatered }</Text>
      <Header onPress={() => deleteUserPlant()}>⚰️</Header>
    </MainApp>
    </ScrollView>
  )
}

const MainApp = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const BigPic = styled.Image`
  height: 300px;
  width: 300px;
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
