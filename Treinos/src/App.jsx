import { useState } from 'react'
import './App.css'

import Card from './components/Card'
import CpfValidator from './components/CpfValidator'

function App() {
  
  return (
    <>
      <CpfValidator />
      <Card />
    </>
  )
}

export default App
