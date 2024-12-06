import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import JsonCRUD from './components/JsonCRUD'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <JsonCRUD />
    </>
  )
}

export default App
