import React, { useState, useEffect } from 'react'
import './App.css'
import logo from './assets/logo.svg'
import Navbar from './components/Navbar'
import SecSection from './components/secSection'
import HeroSection from './components/HeroSection'

import AOS from 'aos';
import 'aos/dist/aos.css';
import ThirdSection from './components/ThirdSection'
import ForthSection from './components/ForthSection'
import FithSection from './components/FithSection'
import Contact from './components/Contact'





function App() {
  useEffect(() => {
    AOS.init({
      once: true, 
      mirror: false,
    });
  }, [])

  return (
    <div className='container-fluid'>
      <HeroSection logo = {logo}/>
      <SecSection />
      <ThirdSection/>
      <ForthSection/>
      <FithSection/>
      <Contact /> 
      
    </div>
  )
}

export default App
