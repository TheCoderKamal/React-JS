import { useState } from 'react'

import './App.css'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Banner from './components/Banner'
import Features from './components/Features'
import CallToAction from './components/CallToAction'
import OurClasses from './components/OurClasses'
import Schedule from './components/Schedule'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Preloader />
      <Header />
      <Banner />
      <Features />
      <CallToAction />
      <OurClasses />
      <Schedule />
      <Testimonials />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
