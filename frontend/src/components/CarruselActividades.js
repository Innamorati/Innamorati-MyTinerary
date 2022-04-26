import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { CotenedorDivImagen, ContenedorImagen } from '../style/ActividadesElementos'
import "../style/StyleCarrusel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App(props) {
    console.log(props)
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper actividades"
            >
                {props.actividades.map((actividades) =>
                    <SwiperSlide>
                        <CotenedorDivImagen key={actividades._id}>
                            <ContenedorImagen style={{ backgroundImage: `url(${actividades.Imagen})` }}></ContenedorImagen >
                        </CotenedorDivImagen>
                    </SwiperSlide>)}
            </Swiper>
        </>
    );
}
