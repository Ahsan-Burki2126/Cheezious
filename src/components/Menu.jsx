import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-scroll';

const Menu = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const menuRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 200; // Adjusted scroll distance
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
    <div className='sticky top-24 flex justify-between items-center mx-0 lg:mx-20 shadow-sm bg-customWhite rounded-full px-6'>
      <ChevronLeft
        size={48}
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
          <Link 
            to="starters" 
            smooth={true} 
            duration={500} 
            spy={true}
            offset={-180} // Adjusted offset for better visibility
            className='cursor-pointer px-3 py-2 lg:px-8 lg:py-3 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'
            activeClass="bg-customYellow"
          >
            Starters
          </Link>
          <Link 
            to="chicken-delight" 
            smooth={true} 
            duration={500} 
            spy={true} 
            offset={-180} 
            className='cursor-pointer px-3 py-2 lg:px-8 lg:py-3 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'
            activeClass="bg-customYellow"
          >
            Chicken Delight
          </Link>
          <Link 
            to="somewhat-local" 
            smooth={true} 
            duration={500} 
            spy={true} 
            offset={-180} 
            className='cursor-pointer px-3 py-2 lg:px-8 lg:py-3 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'
            activeClass="bg-customYellow"
          >
            SomeWhat Local
          </Link>
          <Link 
            to="deals" 
            smooth={true} 
            duration={500} 
            spy={true} 
            offset={-180} 
            className='cursor-pointer px-3 py-2 lg:px-8 lg:py-3 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'
            activeClass="bg-customYellow"
          >
            Deals
          </Link>
          <Link 
            to="drinks" 
            smooth={true} 
            duration={500} 
            spy={true} 
            offset={-180} 
            className='cursor-pointer px-3 py-2 lg:px-8 lg:py-3 bg-menuItemBG rounded-full font-bold hover:bg-customYellow whitespace-nowrap'
            activeClass="bg-customYellow"
          >
            Drinks
          </Link>
        </div>
      </div>
      <ChevronRight
        size={48}
        className={`cursor-pointer ${scrollPosition >= (menuRef.current?.scrollWidth - menuRef.current?.clientWidth) ? 'opacity-50' : 'opacity-100'}`}
        onClick={() => scroll('right')}
      />
    </div>
  );
};

export default Menu;
