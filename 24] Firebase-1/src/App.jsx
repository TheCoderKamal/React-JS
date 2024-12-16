import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SignUp from './firebase/SignUp'
import LogIn from './firebase/LogIn'
import Dashboard from './firebase/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />}></Route>
          <Route path='/login' element={<LogIn />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
