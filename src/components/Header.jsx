import React from 'react'
import LOGO from '../assets/images/LOGO.png';
import { MapPin, Search, User, ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <>
      <header className='sticky top-0 z-10 flex flex-wrap justify-between items-center bg-customYellow px-4 sm:px-8 md:px-16 py-4'>
        <div className='flex items-center gap-4 order-1 sm:order-2'>
          <div className='w-[75px] sm:hidden'>
            <img src={LOGO} alt="LOGO" />
          </div>
          <div className='flex justify-center items-center gap-2'>
            <span><MapPin color='#d90002' strokeWidth={2} size={30}/></span>
            <span className='hidden sm:inline'>Islamabad</span>
          </div>
        </div>
        <div className='w-[75px] hidden sm:block order-2 sm:order-1'>
          <img src={LOGO} alt="LOGO" />
        </div>
        <div className='flex justify-center items-center gap-3 order-3'>
          <Search color='#d90002' strokeWidth={2} size={30} className='border-r-customRed'/>
          <User color='#d90002' strokeWidth={2} size={30} className='border-r-customRed'/>
          <ShoppingCart color='#d90002' strokeWidth={2} size={30} className='border-r-customRed hidden sm:inline-block'/>
        </div>
      </header>
    </>
  )
}

export default Header;