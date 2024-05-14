"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



import { Pagination, Navigation, Autoplay } from 'swiper/modules';


const Slider = () => {


    return (
        <>
            <div className='lg:container container-none mx-auto py-2'>
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
            delay: 3200,
            disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
    >
        <SwiperSlide>
            <div className="mx-auto p-2">
                <Image className='w-full lg:h-96 h-56' src='/rotacao site.png' alt='logo' width={1920} height={1080} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="mx-auto p-2">
                <Image className='w-full lg:h-96 h-56' src='/rotacao site2.png' alt='logo' width={1920} height={1080} />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="mx-auto p-2">
                <Image className='w-full lg:h-96 h-56' src='/rotacao site3.png' alt='logo' width={1920} height={1080} />
            </div>
        </SwiperSlide>
    </Swiper>
</div>



        </>
    )


};

export default Slider;