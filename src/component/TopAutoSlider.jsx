import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./TopAutoSlider.css";
function TopAutoSlider() {
  return (
    <div className="swiper-top-section">
      <div className="swiper-wrapper">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 5000,
          }}
          speed={1000}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide id="content-1">
            <div className="title-section">
              <h2>
                BY THE EXPERT,
                <br />
                FOR THE <span>Professional</span>
              </h2>
            </div>
            <div className="apply-btn">
              apply <br />
              now
            </div>
          </SwiperSlide>
          <SwiperSlide id="content-2">
            <div className="title-section">
              <h2>
                UI/UX & <span>Design <br /> Management</span>
              </h2>
            </div>
            <div className="apply-btn">
              know <br />
              more
            </div>
          </SwiperSlide>
          <SwiperSlide id="content-3">
            <div className="title-section">
              <h2>
                FASHION 
                 {" "} <span>Business <br />Management</span>
              </h2>
            </div>
            <div className="apply-btn">
              know <br />
              more
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default TopAutoSlider;
