import React from 'react'
import DealCard from './DealCard'
import pizza from "../assets/images/deals/pizza.jpg"
import pizza2 from "../assets/images/deals/pizza2.jpg"
import pizza5 from "../assets/images/deals/pizza5.jpg"
const SomeLocal = () => {
  return (
      <>
        <div className='container flex-col w-[85%] mx-auto flex mt-6 rounded-xl  justify-start items-start border-y-2 border-gray-400 py-5'>
        <h1 className=' font-bold w-[85%] mx-auto text-3xl'>APP EXCLUSIVE</h1>
        <div className=" flex justify-center lg:justify-start items-center flex-wrap  gap-10  py-4    px-0 lg:px-20">
              <DealCard title="Chiken Tikka Pizza" image={pizza} description="Mouth Watering" price={"1700"}/>
              <DealCard title="Spicy Pizza" image={pizza2} description="Khalo Bhai!" price={"1599"}/>
              <DealCard title="Tandoori Pizza" image={pizza5} description="Tasty as Hell!" price={"1800"}/>
              </div>
          </div>
              
      </>
  )
}

export default SomeLocal
