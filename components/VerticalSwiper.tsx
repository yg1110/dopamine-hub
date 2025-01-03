import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ClipData } from '@/api/chzzk/get-recommended-clips.ts';

interface VerticalSwiperProps {
  clips: ClipData[];
  onChangeNextParams: () => void;
}

const VerticalSwiper: React.FC<VerticalSwiperProps> = ({ clips, onChangeNextParams }) => {
  // const [visibleSlides, setVisibleSlides] = useState<number[]>([1, 0, 2]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const onSlideChange = (swiper: any) => {
    if (clips.length === 0) return;
    // const newVisibleSlides = [swiper.activeIndex, swiper.activeIndex - 1, swiper.activeIndex + 1].filter(
    //   (index) => index >= 0 && index < clips.length
    // );
    // setVisibleSlides(newVisibleSlides);
    setActiveIndex(swiper.activeIndex);

    if (swiper.isEnd) {
      onChangeNextParams();
    }
  };

  return (
    <Swiper
      className="h-screen w-screen"
      direction="vertical"
      slidesPerView={1}
      // mousewheel={true}
      // modules={[Mousewheel]}
      onSlideChangeTransitionEnd={onSlideChange}
      onInit={(swiper) => onSlideChange(swiper)}
    >
      {clips.map((clip, index) => (
        <SwiperSlide key={index}>
          {activeIndex === index ? (
            <div className="flex-col items-center justify-center h-full relative bg-black">
              <div className="bg-transparent w-screen h-[45vh] z-10 absolute top-0"></div>
              <div className="bg-transparent w-screen h-[45vh] z-10 absolute bottom-0"></div>
              <div className="bg-transparent w-[45vw] h-screen z-10 absolute right-0"></div>
              <div className="bg-transparent w-[45vw] h-screen z-10 absolute left-0"></div>
              <iframe
                ref={iframeRef}
                className="w-screen h-screen absolute z-0"
                src={`https://chzzk.naver.com/embed/clip/${clip.clipUID}`}
                allow="autoplay; clipboard-write; web-share"
                allowFullScreen={false}
              ></iframe>
            </div>
          ) : (
            <div className="w-full h-full flex items-center bg-black"></div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default VerticalSwiper;
