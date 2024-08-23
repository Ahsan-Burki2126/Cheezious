import React from 'react'

const Card = () => {
  return (
      <>
          <div className="card">
              <div>
                  {/* <img src={''} alt="error" /> */}
              </div>
              <div>
                  <h1>Hello</h1>
                  <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div>
                  <h4>Rs 450/</h4>
                  <buttton className='px-6 py-3 font-bold'>Add To Cart</buttton>
              </div>
          </div>
      </>
  )
}

export default Card
