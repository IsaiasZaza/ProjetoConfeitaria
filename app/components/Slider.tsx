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
                        delay: 2500,
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
                        <Image className='w-full lg:h-96 h-56 mx-auto' src='/rotacaosite.jpeg' alt='logo' width={1920} height={1080} 
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='w-full lg:h-96 h-56 mx-auto' src='/rotacao site2.png' alt='logo' width={1920} height={1080} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image className='w-full lg:h-96 h-56 mx-auto' src='/rotacao site3.png' alt='logo' width={1920} height={1080} />
                    </SwiperSlide>
                </Swiper>
            </div>


        </>
    )


};

export default Slider;