import React from 'react'

import UserStateProvider from './context/UserStateProvider'
import PlantParenthoodApp from './Navigators/PlantParenthoodApp'

export default function App() {
  return (
    <UserStateProvider>
      <PlantParenthoodApp />
    </UserStateProvider>
  )
}