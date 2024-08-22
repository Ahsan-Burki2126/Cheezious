import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import advt1 from "../assets/images/carousel/advt1.jpg";
import advt2 from "../assets/images/carousel/advt2.jpg";
import advt3 from "../assets/images/carousel/advt3.jpg";
import advt4 from "../assets/images/carousel/advt4.jpg";
import advt5 from "../assets/images/carousel/advt5.jpg";
import advt6 from "../assets/images/carousel/advt6.jpg";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
  return (
    <div className="relative flex items-center justify-center mt-8 mb-8">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}  // Reduced spacing for better responsiveness
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        speed={900} // Speed of the transition (in milliseconds)
        className="w-full max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mySwiper rounded-md overflow-hidden"
      >
        <SwiperSlide>
          <img src={advt1} alt="Slide 1" className="w-full h-[196px] sm:h-[294px] md:h-[343px] lg:h-[392px] object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={advt2} alt="Slide 2" className="w-full h-[196px] sm:h-[294px] md:h-[343px] lg:h-[392px] object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={advt3} alt="Slide 3" className="w-full h-[196px] sm:h-[294px] md:h-[343px] lg:h-[392px] object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={advt4} alt="Slide 4" className="w-full h-[196px] sm:h-[294px] md:h-[343px] lg:h-[392px] object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={advt5} alt="Slide 5" className="w-full h-[196px] sm:h-[294px] md:h-[343px] lg:h-[392px] object-contain" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={advt6} alt="Slide 6" className="w-full h-[196px] sm:h-[294px] md:h-[343px] lg:h-[392px] object-contain" />
        </SwiperSlide>
      </Swiper>

      {/* Navigation Arrows */}
  <div className="swiper-button-prev absolute top-1/2 left-2 sm:left-2 lg:left-10 transform -translate-y-1/2 text-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 bg-customRed rounded-md shadow-md cursor-pointer z-10 hidden lg:block"></div>
<div className="swiper-button-next absolute top-1/2 right-2 sm:right-2 lg:right-10 transform -translate-y-1/2 text-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12 bg-customRed rounded-md shadow-md cursor-pointer z-10 hidden lg:block"></div>

    </div>
  );
};

export default Carousel;
