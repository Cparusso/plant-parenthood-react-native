import React, { useState, useEffect } from 'react'
import { Text, View, Button, ScrollView, Image } from 'react-native'
import styled from 'styled-components'

export default function PlantDetails({ navigation }) {

  const {binomialName, picture, plantId} = navigation.state.params

  const commonName = navigation.getParam('commonName').split(' / ')[0]

  const createUserPlant = () => {
    // fetch('http://localhost:3000/user_plants', {
    fetch('http://taco.local:3000/user_plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        picture: picture,
        given_name: "Banana",
        date_received: "071819",
        bio: "This is a plant that I own.",
        plant_id: plantId,
        user_id: 7
      })})
      .then((response) => response.json())
    }

  return (
    <ScrollView>
    <MainApp>
      <BigPic source={{uri: navigation.getParam('picture')}}/>
      <Header>{ commonName }</Header>
      <Header onPress={() => createUserPlant()}>+</Header>
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
