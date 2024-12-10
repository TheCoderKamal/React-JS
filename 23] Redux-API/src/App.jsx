import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import API from './components/API'
import { Provider } from 'react-redux'
import { store } from './store/Store'

function App() {

  return (
    <>
      <Provider store={store}>
        <API />
      </Provider>
    </>
  )
}

export default App
