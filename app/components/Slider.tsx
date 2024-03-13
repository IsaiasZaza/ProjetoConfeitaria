"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Pagination, Navigation } from 'swiper/modules';


const Slider = () => {
    return (
        <>
        <div className=''>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><Image className='w-full h-96 mx-auto' src={'/rotacao site.png'} alt='logo' width={1000} height={1000}></Image></SwiperSlide>
                <SwiperSlide><Image className='w-full h-96 mx-auto' src={'/rotacao site2.png'} alt='logo' width={1000} height={1000}></Image></SwiperSlide>
                <SwiperSlide><Image className='w-full h-96 mx-auto' src={'/rotacao site3.png'} alt='logo' width={1000} height={1000}></Image></SwiperSlide>
            </Swiper>
        </div>
            
        </>
    )


};

export default Slider;