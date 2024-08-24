import React from 'react'
import DealCard from './DealCard'
import PizzaDeal from "../assets/images/deals/PizzaDeal.png"
import BurgerDeal from "../assets/images/deals/BurgerDeal.png"
import PizzaDeal1 from "../assets/images/deals/PizzaDeal1.jpg"
import PizzaDeal2 from "../assets/images/deals/PizzaDeal2.png"
const Deals = () => {
  return (
      <>
        <div className='container flex-col w-[85%] mx-auto flex mt-6 rounded-xl  justify-start items-start border-y-2 border-gray-400 py-5'>
        <h1 className=' font-bold w-[85%] mx-auto text-xl lg:text-3xl text-center lg:text-start'>Pizza Deals</h1>
        <div className=" flex justify-center lg:justify-start items-center flex-wrap  gap-10  py-4    px-0 lg:px-20">
        <DealCard title="Pizza + Leg Pieces +Drink" image={PizzaDeal} description="Khalo Bhai" price={"2300"}/>
        <DealCard title="2 Burgers+Drink" image={BurgerDeal} description="Khalo Bhai" price={"2300"}/>
        <DealCard title="Pizza+Wings+LargeDrink" image={PizzaDeal2} description="Khalo Bhai" price={"2300"}/>
              </div>
          </div>
              
      </>
  )
}

export default Deals
