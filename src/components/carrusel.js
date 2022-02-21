import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Datos from '../datos/ciudades';
import "../style/style.css";
import { Autoplay, Pagination, Navigation } from "swiper";

export default function carrusel() {
  return (
    <>
      <Swiper
        spaceBetween={0}
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
            slidesPerView: 2,
            spaceBetween: 0,
            
          },
          "@0.75": {
            slidesPerGroup: 4,
            slidesPerView: 4,
            spaceBetween: 0,
          },
          "@1.00": {
            slidesPerGroup: 4,
            slidesPerView: 4,
            spaceBetween: 0,
          },
          "@1.50": {
            slidesPerGroup: 4,
            slidesPerView: 4,
            spaceBetween:  0,
          },
        }}
      >
        {Datos.map((ciudades)=>   
                      <SwiperSlide key={ciudades.id}>
                             <div className="imagenescarrusel">
                                 <img src={process.env.PUBLIC_URL+`/imagenes/ciudades/${ciudades.Imagen}` } ></img>
                                 <div className="textoimagenes">
                                   <p className="imgtext">{ciudades.Pais}</p>
                                   <p className="imgtext">{ciudades.ciudad}</p>
                                 </div>
                             </div>                        
                     </SwiperSlide>
                  )}
      </Swiper>
    </>
  );
}
