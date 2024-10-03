import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let arr = [1, "kamal", true];
  let arr2 = [...arr, "shreya", "jay"];

  return (
    <>
      <h1>JSX Usage</h1>

      {
        arr.map((item, index) => {
          return (
            <div key={index} style={{border: "1px solid black"}}  >
              <p>{item}</p>
            </div>
          )
        })
      }
      <br />
      {
        arr2.map((item, index) => {
          return (
            <div key={index} style={{border: "1px solid black"}}  >
              <p>{item}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
