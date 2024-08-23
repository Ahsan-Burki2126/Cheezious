import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import './App.css'
import Carousel from './components/Carousel';
import Menu from './components/Menu';
import AppExclusive from './components/AppExclusive'
import Accordion from './components/Accordian'
import Footer from './components/Footer'

function App() {

  return (
    <>
      
      <Header />
      <Carousel />
      <Menu />
      {/* <AppExclusive /> */}
      <Accordion />
      <Footer />
      

    </>
  )
}

export default App
