import React from 'react'
import DealCard from './DealCard';
import ColaNext from "../assets/images/deals/ColaNext.png"
import ColdDrink from "../assets/images/deals/ColdDrink.jpg"
import Water from "../assets/images/deals/Water.jpeg"
const Drinks = () => {
  return (
      <>
        <div className='container flex-col w-[85%] mx-auto flex mt-6 rounded-xl  justify-start items-start border-y border-gray-400 py-5' id='drinks'>
        <h1 className=' font-bold w-[85%] mx-auto text-xl lg:text-3xl text-center lg:text-start'>Drinks</h1>
          <div className=" flex justify-center lg:justify-start items-center flex-wrap  gap-10  py-4    px-0 lg:px-20">
              <DealCard title="Cola Next" image={ColaNext} description="Pakistani Brand" price={"190"}/>
              <DealCard title="Mineral Water" image={Water} description="Mineral Water" price={"50"}/>
              <DealCard title="Cold Drink" image={ColdDrink} description="Pakistani Brand" price={"190"}/>
              </div>
          </div>
      </>
  )
}

export default Drinks
