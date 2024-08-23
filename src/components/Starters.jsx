import React from 'react'
import DealCard from './DealCard';
import  ArabicRolls  from '../assets/images/deals/ArabicRolls.png';
import BihariRolls from '../assets/images/deals/BihariROlls.png';
import LegPieces from "../assets/images/deals/LegPieces.png"
import OvenBakedWings from "../assets/images/deals/OvenBakedWings.png"
const Starters = () => {
  return (
      <>
        <div className='container flex-col w-[85%] mx-auto flex mt-6 rounded-xl  justify-start items-start border-y-2 border-gray-400 py-5'>
        <h1 className=' font-bold w-[85%] mx-auto text-3xl'>Starters</h1>
              <div className=" flex justify-center lg:justify-start items-center flex-wrap  gap-8  py-4    px-0 lg:px-20">
              <DealCard title="Leg Pieces" image={LegPieces} description="Tasty Leg Pieces" price={"599"}/>
              <DealCard title="Arabic Rolls" image={ArabicRolls} description="Enjoy Arabic Food" price={"699"}/>
              <DealCard title="Bihari Rolls" image={BihariRolls} description="Enjoy Arabic Food" price={"699"}/>
              <DealCard title="Hot Wings" image={OvenBakedWings} description="Oven Baked Wings" price={"499"}/>

              </div>
          </div>
      </>
  )
}

export default Starters;
