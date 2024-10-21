import { useState } from 'react'
import './App.css'
import DynamicFormComponent from './components/DynamicFormComponentAndRegex'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DynamicFormComponent />
    </>
  )
}

export default App
