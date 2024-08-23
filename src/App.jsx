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
import LOGO from "../src/assets/images/LOGO.png"
import DealCard from './components/DealCard'
import Starters from './components/Starters'
import SomeLocal from './components/SomeLocal'
import Deals from './components/Deals'
function App() {

  return (
    <>
      <div className='bg-customWhite'>
      <Header />
      <Carousel />
      <Menu />
      <AppExclusive />
      <Starters />
        <SomeLocal /> 
       <Deals />
      <Accordion />
      <Footer />

      </div>
    </>
  )
}

export default App
