import React, { useState, useEffect } from 'react'
import { Text, View, Button, ScrollView } from 'react-native'
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

  return (
    <ScrollView>
    <MainApp>
      <Header>Plants</Header>
        { plants ? plants.map(plant => <PlantCard key={plant.id} plant={plant} />) : <Text>Growing Plants...</Text> }
    </MainApp>
    </ScrollView>
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
