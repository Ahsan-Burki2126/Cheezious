import React from 'react';

const DealCard = ({ 
  image, 
  title, 
  description, 
  price, 
  onAddToCart
}) => {
  return (
    <div className="w-[230px] p-2.5 rounded-[20px] bg-white shadow-md border-2 border-gray-200 hover:border-customYellow pb-6">
      <div className="mb-2">
        <img src={image} alt={title} className="w-full rounded-[18px]" />
      </div>
      <div className="my-1.5 text-center">
        <h3 className="text-dark-text text-center font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <hr className="my-2" />
      <div className="mt-3">
        <h5 className="text-dark-red text-[0.9rem] mt-4 text-center font-bold">{"Rs " + price + "/-"}</h5>
        <button 
          onClick={onAddToCart}
          className="block mx-auto mt-2 py-2 px-4 font-bold bg-customRed text-white rounded-full hover:bg-customYellow hover:text-black duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DealCard;