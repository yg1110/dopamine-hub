import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import React, { useState } from 'react';
import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ClipData } from '@/api/chzzk/get-recommended-clips.ts';

interface VerticalSwiperProps {
  clips: ClipData[];
  onChangeNextParams: () => void;
}

const VerticalSwiper: React.FC<VerticalSwiperProps> = ({ clips, onChangeNextParams }) => {
  const [visibleSlides, setVisibleSlides] = useState<number[]>([1, 0, 2]);

  const onSlideChange = (swiper: any) => {
    if (clips.length === 0) return;
    const newVisibleSlides = [swiper.activeIndex, swiper.activeIndex - 1, swiper.activeIndex + 1].filter(
      (index) => index >= 0 && index < clips.length
    );
    setVisibleSlides(newVisibleSlides);

    if (swiper.isEnd) {
      onChangeNextParams();
    }
  };

  return (
    <Swiper
      className="h-screen w-screen"
      direction="vertical"
      slidesPerView={1}
      mousewheel={true}
      modules={[Mousewheel]}
      onSlideChangeTransitionEnd={onSlideChange}
      onInit={(swiper) => onSlideChange(swiper)}
    >
      {clips.map((clip, index) => (
        <SwiperSlide key={index}>
          {visibleSlides.includes(index) ? (
            <div className="flex items-center justify-center h-full bg-black">
              <iframe
                className="w-screen h-[80vh]"
                src={`https://chzzk.naver.com/embed/clip/${clip.clipUID}`}
                frameBorder="0"
                allow="autoplay; clipboard-write; web-share"
                allowFullScreen={false}
              ></iframe>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">Loading...</div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VerticalSwiper;
