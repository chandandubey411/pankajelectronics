import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./slider.css";

import { EffectCoverflow, Pagination } from "swiper/modules";

const categories = [
  "Phones & Wearables",
   "Home-Appliances",
  "Televisions & Accessories",
  "Computers & Tablets",
  "Audio & Video",
  "Cameras & Accessories",
];

const images = [
  "/image/sl1.png",
  "/image/sl2.png",
  "/image/sl3.png",
  "/image/sl4.png",
  "/image/sl5.png",
  "/image/sl6.png",
  "/image/sl7.png",
  "/image/sl8.png"
];

const Slider = () => {
  const navigate = useNavigate();

  const handleSlideClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  return (
    <Swiper
      effect="coverflow"
      grabCursor
      centeredSlides
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      {categories.map((category, index) => (
        <SwiperSlide
          key={category}
          onClick={() => handleSlideClick(category)}
          className="cursor-pointer"
        >
          <img
            src={images[index]}
            alt={category}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
