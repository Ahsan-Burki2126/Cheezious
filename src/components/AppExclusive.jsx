import React from 'react'
import DealCard from './DealCard';
import LOGO from "../assets/images/LOGO.png"
const AppExclusive = () => {
  return (
      <>
          <div className='container flex-col w-[85%] mx-auto flex mt-6 rounded-xl  justify-start items-start border-y-2 border-gray-400 py-5'>
              <h1 className=' font-bold w-[85%] mx-auto text-xl lg:text-3xl text-center lg:text-start'>APP EXCLUSIVE</h1>
          <div className=" flex justify-center lg:justify-start items-center flex-wrap  gap-10  py-4    px-0 lg:px-20">
              <DealCard title="Fuzzy Burger" image={LOGO} description="lorem ipsum falana dimkana" price={"300"}/>
              </div>
          </div>
              
      </>
  )
}

export default AppExclusive
