import React, { useState, useEffect } from 'react'
import { Text, View, Button, ScrollView, Dimensions } from 'react-native'
import styled from 'styled-components'

import PlantCard from './PlantCard'

export default function Plants(props) {

  const [ plants, setPlants ] = useState([])

  useEffect(() => {
    fetch('http://taco.local:3000/plants')
    .then(resp => resp.json())
    .then(setPlants)
    .catch(err => console.log(err))
  }, { setPlants })

  console.log(plants.length)

  return (
    <MainApp>
        <Header>Plants</Header>
        <ScrollView>
          { plants.length !== 0 ? plants.map(plant => <PlantCard navigation={props.navigation} key={plant.id} plant={plant} />) : <Text>Growing Plants...</Text> }
    </ScrollView>
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
  margin-top: 12%;
`

const ButtonsContainer = styled.View`
  flex-direction: row;
`
