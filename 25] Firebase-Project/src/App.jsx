import './App.css'
import Dashboard from './firebase/Dashboard'
import SignIn from './firebase/SignIn'
import SignUp from './firebase/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
