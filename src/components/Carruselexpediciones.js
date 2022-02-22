import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../components/style2.css";
import Expediciones from "../dates/expediciones"
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "../App.css"
export default function Carruselexpediciones() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
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
        breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 0,
              
            },
            "@0.75": {
              slidesPerGroup: 2,
              slidesPerView: 2,
              spaceBetween: 0,
            },
            "@1.00": {
              slidesPerGroup: 2,
              slidesPerView: 2,
              spaceBetween: 0,
            },
            "@1.50": {
              slidesPerGroup: 2,
              slidesPerView: 2,
              spaceBetween:  0,
            },
          }}
      >
          {Expediciones.map((expedicones)=>
          
        <SwiperSlide key={expedicones.id}>
            <div className="imagenescarrusel">
                <img src={process.env.PUBLIC_URL+`/imagenes/imagenesexcurciones/${expedicones.Imagen}` }></img>
                    <div className="textoimagenes">
                        <p className="imgtext">{expedicones.Pais}</p>
                        <p className="imgtext">{expedicones.ciudad}</p>
                    </div>
            </div>

        </SwiperSlide>
      )}
      </Swiper>
    </>
  );
}
