import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./DubbleAutoSlider.css";

// import required modules
import { Keyboard, Autoplay, Navigation, Pagination } from "swiper/modules";

export default function App() {
  const swiperRef = useRef(null);

  const navigateNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(2); // Slide 2 steps forward
    }
  };

  const navigatePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(2); // Slide 2 steps backward
    }
  };
  return (
    <div className="swiper-top-section">
      <div className="swiper-wrapper">
        <Swiper
          ref={swiperRef}
          slidesPerView={2}
          slidesPerGroupSkip={2}
          breakpoints={{
            769: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1025: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          onNavigationNext={() => navigateNext(2)}
          onNavigationPrev={() => navigatePrev(2)}
          modules={[Keyboard, Navigation, Pagination, Autoplay]}
          className="mySwiper dubble-swiper"
        >
          <SwiperSlide>
            <img src="https://cdn.magloft.com/github/swiper/images/page-001.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.magloft.com/github/swiper/images/page-002.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.magloft.com/github/swiper/images/page-003.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.magloft.com/github/swiper/images/page-004.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.magloft.com/github/swiper/images/page-005.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.magloft.com/github/swiper/images/page-006.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.magloft.com/github/swiper/images/page-007.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.magloft.com/github/swiper/images/page-008.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://cdn.magloft.com/github/swiper/images/page-009.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
