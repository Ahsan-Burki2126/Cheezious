import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import advt1 from "../assets/images/carousel/advt1.jpg";
import advt2 from "../assets/images/carousel/advt2.jpg";
import advt3 from "../assets/images/carousel/advt3.jpg";
import advt4 from "../assets/images/carousel/advt4.jpg";
import advt5 from "../assets/images/carousel/advt5.jpg";
import advt6 from "../assets/images/carousel/advt6.jpg";

import { Autoplay, Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="relative flex justify-center items-center mt-10">
      <div ref={prevRef} className="relative left-16 cursor-pointer">
        <ChevronLeft size={48} color='white' className='bg-customRed h-20 rounded-full hidden lg:block'/>
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        speed={900}
        className="w-full max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mySwiper"
      >
        {[advt1, advt2, advt3, advt4, advt5, advt6].map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="rounded-lg overflow-hidden ">
              <img 
                src={image} 
                alt={`Slide ${index + 1}`} 
                className="w-auto h-auto  max-w-full max-h-[196px] sm:max-h-[294px] md:max-h-[343px] lg:max-h-[392px] object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={nextRef} className="relative right-16 cursor-pointer ">
        <ChevronRight size={48} color='white' className='bg-customRed h-20 rounded-full hidden lg:block'/>
      </div>
    </div>
  );
};

export default Carousel;