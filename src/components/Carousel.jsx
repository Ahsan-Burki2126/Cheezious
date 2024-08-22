import React, { useRef } from 'react';
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
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative flex justify-center items-center mt-0">
      <div ref={prevRef} className="relative left-16 z-10 cursor-pointer">
        <ChevronLeft size={48} color='white' className='bg-customRed h-20 rounded-full hidden lg:block'/>
      </div>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        speed={900}
        className="w-full max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mySwiper rounded-md overflow-hidden"
      >
        <SwiperSlide>
          <img src={advt1} alt="Slide 1" className="w-full h-[196px] sm:h-[294px] md:h-[343px] lg:h-[392px] object-contain rounded-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={advt2} alt="Slide 2" className="w-full h-[196px] sm:h-[294px] md:h-[343px] lg:h-[392px] object-contain rounded-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={advt3} alt="Slide 3" className="w-full h-[196px] sm:h-[294px] md:h-[343px] lg:h-[392px] object-contain rounded-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={advt4} alt="Slide 4" className="w-full h-[196px] sm:h-[294px] md:h-[343px] lg:h-[392px] object-contain rounded-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={advt5} alt="Slide 5" className="w-full h-[196px] sm:h-[294px] md:h-[343px] lg:h-[392px] object-contain rounded-md" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={advt6} alt="Slide 6" className="w-full h-[196px] sm:h-[294px] md:h-[343px] lg:h-[392px] object-contain rounded-md" />
        </SwiperSlide>
      </Swiper>
      <div ref={nextRef} className="relative right-16 z-10 cursor-pointer">
        <ChevronRight size={48} color='white' className='bg-customRed h-20 rounded-full hidden lg:block'/>
      </div>
    </div>
  );
};

export default Carousel;