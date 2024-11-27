import { useState } from 'react'
import ContextAPI from './components/ContextAPI'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContextAPI />
    </>
  )
}

export default App
