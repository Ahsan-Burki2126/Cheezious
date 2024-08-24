import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Menu = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const menuRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 200; // Adjust this value to control scroll distance
    if (menuRef.current) {
      if (direction === 'left') {
        menuRef.current.scrollLeft -= scrollAmount;
      } else {
        menuRef.current.scrollLeft += scrollAmount;
      }
      setScrollPosition(menuRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (menuRef.current) {
        setScrollPosition(menuRef.current.scrollLeft);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='sticky top-24 flex justify-center items-center mx-0 lg:mx-20 shadow-sm bg-customWhite rounded-full px-2'>
      <ChevronLeft
        size={96}
        className={`cursor-pointer ${scrollPosition === 0 ? 'opacity-50' : 'opacity-100'}`}
        onClick={() => scroll('left')}
      />
      <div
        ref={menuRef}
        className='flex overflow-x-auto scrollbar-hide'
        style={{
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        <div className='flex flex-nowrap justify-start items-center gap-3 py-4'>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Cheesy Fries</a>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Cheeseburger</a>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Cheese Pizza</a>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4   bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Grilled Cheese Sandwich</a>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Cheese Nachos</a>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Mozzarella Sticks</a>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Mac and Cheese</a>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Cheesy Garlic Bread</a>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Cheese Quesadilla</a>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Cheese Stuffed Burgers</a>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Cheddar Bites</a>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Cheese Dip</a>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Cheese Fritters</a>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Cheese Pancakes</a>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Cheese Wedges</a>
          <a href="#" className='px-3 py-2 lg:px-5 lg:py-4 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'>Cheese-Stuffed Mushrooms</a>
        </div>
      </div>
      <ChevronRight
        size={96}
        
        className={`cursor-pointer ${scrollPosition >= (menuRef.current?.scrollWidth - menuRef.current?.clientWidth) ? 'opacity-50' : 'opacity-100'}`}
        onClick={() => scroll('right')}
      />
    </div>
  );
};

export default Menu;