import React, { useState, useEffect } from 'react'
import { Text, View, Button, ScrollView, Image } from 'react-native'
import styled from 'styled-components'

export default function PlantDetails({ navigation }) {

  const commonName = navigation.getParam('commonName').split(' / ')[0]

  return (
    <ScrollView>
    <MainApp>
      <BigPic source={{uri: navigation.getParam('picture')}}/>
      <Header>{ commonName }</Header>
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
