import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar.jsx'
import Sidebar from './Components/Sidebar.jsx'
import MainContent from './Components/MainContent.jsx'
import Footer from './Components/Footer.jsx'
import './component.css'

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </>
  )
}

export default App
