import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'
import Component from './Component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Component/>
  )
}

export default App
