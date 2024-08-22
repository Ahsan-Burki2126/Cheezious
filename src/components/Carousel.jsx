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
        spaceBetween={30}
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
        className="w-[85%] mySwiper rounded-md"
      >
        <SwiperSlide>
          <img src={advt1} alt="Slide 1" className="w-full h-[350px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={advt2} alt="Slide 2" className="w-full h-[350px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={advt3} alt="Slide 3" className="w-full h-[350px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={advt4} alt="Slide 3" className="w-full h-[350px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={advt5} alt="Slide 3" className="w-full h-[350px] object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={advt6} alt="Slide 3" className="w-full h-[350px] object-cover" />
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="swiper-button-prev absolute text-white px-6 py-10 ml-6 bg-customRed rounded-md shadow-md cursor-pointer z-10"></div>
      <div className="swiper-button-next absolute text-white px-6 py-10 mr-6 bg-customRed rounded-md shadow-md cursor-pointer z-10"></div>
    </div>
  );
};

export default Carousel;
