import React from 'react'
import DealCard from './DealCard'
import HotShots from "../assets/images/deals/HotShots.png"
import HotWings from "../assets/images/deals/HotWings.png"
import ChickenNuggets from "../assets/images/deals/ChickenNuggets.png"
const ChickenDelight = () => {
  return (
        <div className='container flex-col w-[85%] mx-auto flex mt-6 rounded-xl  justify-start items-start border-y border-gray-400 py-5' id='chicken-delight'>
        <h1 className=' font-bold w-[85%] mx-auto text-xl lg:text-3xl text-center lg:text-start'>Chicken Delight</h1>
        <div className=" flex justify-center lg:justify-start items-center flex-wrap  gap-10  py-4    px-0 lg:px-20">
        <DealCard title="Hot Shots" image={HotShots} description="10 Pcs Hotshots" price={"390"}/>
        <DealCard title="Crispy Fired Chicken Wings" image={HotWings} description="Khalo Bhai" price={"340"}/>
        <DealCard title="Chicken Nuggets" image={ChickenNuggets} description="Crispy Fried Chicken" price={"440"}/>
              </div>
          </div>
  )
}

export default ChickenDelight
