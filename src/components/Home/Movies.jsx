import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import Aos from 'aos';
import 'aos/dist/aos.css'
import SwiperCore, { Navigation, Pagination } from 'swiper';

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"



SwiperCore.use([Pagination, Navigation]);

const Movies = () => {
    useEffect(() => {

        Aos.init()
    }, [])
    const breakpoints = {
        "320": {
            "slidesPerView": 1,
            "spaceBetween": 0,
        },
        
        "1200": {
            "slidesPerView": 4,
            // "spaceBetween": 20
        }
    }
    return (
        <>
            <div className="home-movies-heading">
                <h1 data-aos="fade-up">Movies</h1>
            </div>
            <div className="home-movies-cards" data-aos="zoom-in-up">
                <div className="home-movies-cards-center">
                    <Swiper slidesPerView={4} spaceBetween={-100} loop={true} navigation={false} className="mySwiper" >
                        <SwiperSlide className='home-movies-cards-center-items' >
                            <img src="https://dancemaster.in/demo/wp-content/uploads/2021/11/latest-realse-1-768x768.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className='home-movies-cards-center-items' >
                            <img src="https://dancemaster.in/demo/wp-content/uploads/2021/11/latest-realse-2-768x768.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className='home-movies-cards-center-items' >
                            <img src="https://dancemaster.in/demo/wp-content/uploads/2021/11/latest-realse-1-768x768.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className='home-movies-cards-center-items' >
                            <img src="https://dancemaster.in/demo/wp-content/uploads/2021/11/latest-realse-1-768x768.jpg" />
                        </SwiperSlide>
                        <SwiperSlide className='home-movies-cards-center-items' >
                            <img src="https://dancemaster.in/demo/wp-content/uploads/2021/11/latest-realse-2-768x768.jpg" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Movies
