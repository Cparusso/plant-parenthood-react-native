import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

import { connect } from 'react-redux'

function HomeScreen(props) {
  const { navigate } = props.navigation

  return (
    <MainApp>
      <Header>Plant</Header>
      <Header>Parenthood</Header>
      <ButtonsContainer>
        <Button title="Sign up"/>
        <Button onPress={() => navigate('Drawers')} title="Log in"/>
      </ButtonsContainer>
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => props.decreaseCounter()} >
        <Text>Decrease</Text>
      </TouchableOpacity>
      <Text>
        {props.counter}
      </Text>
      <TouchableOpacity onPress={() => props.increaseCounter()} >
        <Text>Increase</Text>
      </TouchableOpacity>
      </View>
    </MainApp>
  )
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: "INCREASE_COUNTER"}),
    decreaseCounter: () => dispatch({type: "DECREASE_COUNTER"})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

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
