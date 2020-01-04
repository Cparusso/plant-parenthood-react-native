import React from 'react'

import { createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import PlantParenthoodApp from './Navigators/PlantParenthoodApp'

const initialState = {
  counter: 0,
  plants: {}
}

const reducer = (state = initialState, action) => {
  switch(action.type)
  {
    case 'INCREASE_COUNTER': return{counter: state.counter + 1}
    case 'DECREASE_COUNTER': return{counter: state.counter - 1}
  }
  return state
}

const store = createStore(reducer)

// Tentative Color Scheme: https://coolors.co/50ffb1-48a9a6-35393c-4bc6b9-546d64

export default function App() {
  return (
    <Provider store={ store } >
      <PlantParenthoodApp />
    </Provider>
  )
}
