import React, { useState, useEffect } from 'react'
import { Text, View, Button, ScrollView, Dimensions, Image } from 'react-native'
import styled from 'styled-components'

import PlantCard from './PlantCard'

export default function Profile(props) {

  const [ user, setUser ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/users/7')
    .then(resp => resp.json())
    .then(setUser)
    .catch(err => console.log(err))
  }, [setUser])

  return (
    <MainApp>
      {user.first_name && <Header>{`${user.first_name}'`}s Profile</Header>}
      {user.picture &&
        <Image
          style={{width: 200, height: 170}}
          source={{uri: 'https://media0.giphy.com/media/l0HlRgBDnqEcOIs5q/giphy.gif'}}
        />
      }
      {user.user_plants &&
        <Garden>
          { user.user_plants.length !== 0 ? user.user_plants.map(userPlant => <PlantCard navigation={props.navigation} key={userPlant.id} plant={userPlant.plant} userPlant={userPlant}/>) : <Text>Growing Plants...</Text> }
        </Garden>
      }
    </MainApp>
  )
}

const Garden = styled.ScrollView`
  width: 100%;
`

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
