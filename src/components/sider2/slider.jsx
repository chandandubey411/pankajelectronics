import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import { CiMobile1 } from "react-icons/ci";
import { PiTelevisionSimple } from "react-icons/pi";
import { BsEarbuds } from "react-icons/bs";
import { LiaLaptopSolid } from "react-icons/lia";
import { TbToolsKitchen } from "react-icons/tb";
import { LuHeater, LuMicrowave } from "react-icons/lu";
import { GiWashingMachine } from "react-icons/gi";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { IoWatchOutline } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { TbAirConditioning } from "react-icons/tb";

import "./styles.css";

const categories = [
  { name: "Phones & Wearables", icon: <CiMobile1 /> },
  { name: "Televisions & Accessories", icon: <PiTelevisionSimple /> },
  { name: "Audio & Video", icon: <BsEarbuds /> },
  { name: "Computers & Tablets", icon: <LiaLaptopSolid /> },
  { name: "Home-Appliances", icon: <TbToolsKitchen /> },
  { name: "Home-Appliances", icon: <LuHeater /> },
  { name: "Home-Appliances", icon: <LuMicrowave /> },
  { name: "Home-Appliances", icon: <GiWashingMachine /> },
  { name: "Home-Appliances", icon: <CgSmartHomeRefrigerator /> },
  { name: "Phones & Wearables", icon: <IoWatchOutline /> },
  { name: "Cameras & Accessories", icon: <CiCamera /> },
  { name: "Home-Appliances", icon: <TbAirConditioning /> },
];

const Slider2 = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/category/${encodeURIComponent(category)}`);
  };

  return (
    <div className="homeCatSlider py-8">
      <div className="container mx-auto px-6">
        <Swiper
          slidesPerView="auto"
          spaceBetween={16}
          navigation
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="catSwiper"
        >
          {categories.map((item, index) => (
            <SwiperSlide
              key={index}
              className="cursor-pointer"
              onClick={() => handleClick(item.name)}
            >
              <div className="catItem">
                <div className="iconBox">{item.icon}</div>
                <h3>{item.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider2;
