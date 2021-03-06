import React from 'react'
import { Text, Image, View, TouchableOpacity } from 'react-native'

import styled from 'styled-components'

const PlantCard = ({ plant, navigation }) => {
  return (
      <Card onPress={() => (
        navigation.navigate('Plant', {
          plantId: plant.id,
          commonName: plant.common_name,
          binomialName: plant.binomial_name,
          picture: plant.picture,
        })
      )}>
          <CardImage source={{uri: plant.picture}}/>
          <View>
              <Title>{plant.common_name.split(' / ')[0]}</Title>
              <BinomialName>{plant.binomial_name}</BinomialName>
          </View>
      </Card>
  )
}

export default PlantCard

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
