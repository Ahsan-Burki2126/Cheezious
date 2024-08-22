import React from 'react'
import  LOGO  from '../assets/images/LOGO.png';
import { MapPin,Search,User,ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <>
      <header className='flex justify-center gap-96 items-center bg-customYellow px-16 py-4'>
        <div className='flex justify-center items-center gap-2'>
          <span><MapPin color='#d90002' strokeWidth={2} size={30}/></span>
          <span>Islamabad</span>
        </div>
        <div className='w-[75px]'>
          <img src={LOGO} alt="LOGO" />
        </div>
        <div className='flex justify-center items-center gap-3'>
          <Search color='#d90002' strokeWidth={2} size={30} className=' border-r-customRed'/>
          <User color='#d90002' strokeWidth={2} size={30} className=' border-r-customRed'/>
          <ShoppingCart color='#d90002' strokeWidth={2} size={30} className=' border-r-customRed'/>
        </div>
      </header>
    </>
  )
}

export default Header
