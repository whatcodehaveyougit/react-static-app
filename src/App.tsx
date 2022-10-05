import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
import Header from './components/Header/header'
import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Header />
      <div>
        Helllo
      </div>
    </Root>
  )
}

export default App
