import React from 'react'
import { Root, addPrefetchExcludes } from 'react-static'
import Navigation from './components/Navigation/Navigation'
import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Navigation />
    </Root>
  )
}

export default App
