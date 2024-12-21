import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import React from 'react';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface VerticalSwiperProps {
  slides: React.ReactNode[];
}

const VerticalSwiper: React.FC<VerticalSwiperProps> = ({ slides }) => {
  return (
    <Swiper
      className="h-screen w-screen"
      direction="vertical"
      slidesPerView={1}
      mousewheel={true}
      modules={[Mousewheel]}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VerticalSwiper;
