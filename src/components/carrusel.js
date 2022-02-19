import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../style/style.css";
import Salar from "../assents/salar.jpg"
import Safari from "../assents/safariafrica.jpg"
import Caracas from "../assents/ciudades/caracas.png"
import Venezia from "../assents/ciudades/Venezia.jpg"

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function carrusel() {
  return (
    <div className="carruselcontainer">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="divcontainer">
                <div className="imagenescarrusel">
                    <img src={Salar} alt="Salar de uyuni"></img>
                </div>
                <div className="imagenescarrusel">
                    <img src={Safari} alt="Safari afica"></img>
                </div>
                <div className="imagenescarrusel">
                    <img src={Caracas} alt="imgen caracas"/>
                </div>
                <div className="imagenescarrusel">
                    <img src={Venezia} alr="imagen venezia"/>
                </div>
            </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide> */}
      </Swiper>
    </div>
  );
}
