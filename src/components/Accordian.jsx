import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem = ({ title, content, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 px-4 text-left"
        onClick={onToggle}
      >
        <span className="text-lg font-medium text-white">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-white transition-transform duration-300" />
        ) : (
          <ChevronDown className="w-5 h-5 text-white transition-transform duration-300" />
        )}
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-6 pb-5 bg-neutral-900 ">
          <p className="text-white">{content}</p>
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

const accordionData = [
  {
    title: "What is Cheezious?",
    content: "Cheezious is a popular restaurant known for its delicious and cheesy dishes, offering a variety of pizzas, burgers, and other comfort foods."
  },
  {
    title: "What are the specialties of Cheezious?",
    content: "Cheezious specializes in a variety of cheesy delights, including gourmet pizzas, loaded burgers, and signature appetizers, all made with the finest ingredients."
  },
  {
    title: "Does Cheezious offer vegetarian options?",
    content: "Yes, Cheezious offers a range of vegetarian options, including veggie-loaded pizzas, plant-based burgers, and fresh salads."
  },
  {
    title: "Can I customize my order at Cheezious?",
    content: "Absolutely! At Cheezious, you can customize your pizzas, burgers, and other dishes by choosing your favorite toppings, sauces, and sides."
  },
  {
    title: "Does Cheezious offer delivery services?",
    content: "Yes, Cheezious offers fast and convenient delivery services, ensuring your favorite meals arrive hot and fresh right at your doorstep."
  }
];


    return (
        <div className="w-4/5 rounded-lg my-16 mx-auto  px-6  flex flex-col py-10 justify-center items-center  bg-customYellow">
            <h1 className='text-center inline text-4xl font-bold '>Spreading Cheezy Khushia!</h1>
    <div className="max-w-3xl mx-auto mt-8 bg-FAQ  shadow-lg rounded-lg overflow-hidden">
      {accordionData.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
    </div>
  );
};

export default Accordion;