import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './Firebase/SignUp'
import SignIn from './Firebase/SignIn'
import Dashboard from './Firebase/Dashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp />} ></Route>
          <Route path='/signin' element={<SignIn />} ></Route>
          <Route path='/dashboard' element={<Dashboard />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
