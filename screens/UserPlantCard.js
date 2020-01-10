import React from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native'

import styled from 'styled-components'

const UserPlantCard = ({ navigation, userPlant }) => {
  return (
      <Card onPress={() => (
        navigation.navigate('UserPlant', {
          plantInfo: {plantId: userPlant.plant.id,
          givenName: userPlant.given_name,
          commonName: userPlant.plant.common_name,
          binomialName: userPlant.plant.binomial_name,
          picture: userPlant.plant.picture,}
        })
      )}>
          <CardImage source={{uri: "https://superawesomevectors.com/wp-content/uploads/2017/04/potted-plant-flat-vector-800x566.jpg"}}/>
          <View>
              <GivenName>{userPlant.given_name}</GivenName>
              <Title>{userPlant.plant.common_name.split(' / ')[0]}</Title>
              <BinomialName>{userPlant.plant.binomial_name}</BinomialName>
          </View>
      </Card>
  )
}

export default UserPlantCard

const Card = styled.TouchableOpacity`
    height: 100px;
    width: 90%;
    margin: auto;
    border-radius: 8px;
    flex-direction: row;
    align-items: center;
`

const CardImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    margin-right: 10px;
`

const Title = styled.Text`
    color: #35393c;
    font-size: 24px;
    font-weight: 600;
`

const GivenName = styled.Text`
    color: #35393c;
    font-size: 32px;
    font-weight: 600;
`

const BinomialName = styled.Text`
    color: #35393c;
    font-size: 14px;
    font-weight: 100;
    margin-top: 4px;
    font-style: italic;
`
