import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Function1 from './components/Function1'
import Function2 from './components/Function2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Function1 />
      {/* <Function2 /> */}
    </>
  )
}

export default App
