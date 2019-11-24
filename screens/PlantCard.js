import React from 'react'
import { Text, Image, View } from 'react-native';

import styled from 'styled-components';

const PlantCard = ({ plant }) => {
  console.log(plant)

  return (
    <Card>
      <CardImage source={{uri: plant.picture}}/>
      <View>
          <Title>{plant.common_name}</Title>
          <PriceCaption>{plant.binomial_name}</PriceCaption>
      </View>
    </Card>
  )
}

export default PlantCard

const Card = styled.View`
    height: 100px;
    width: 95%;
    border-radius: 8px;
    margin: 18px;
    margin-top: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
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
    font-size: 20px;
    font-weight: 600;
`

const PriceCaption = styled.Text`
    color: #35393c;
    font-size: 15px;
    font-weight: 600;
    margin-top: 4px;
`
