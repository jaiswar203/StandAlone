import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    EffectCoverflow, Pagination, Autoplay
} from 'swiper';
import { HeadingAOS, Visible } from '../hooks';

import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"



SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);

const Movies = () => {

    const breakpoints = {
        "410": {
            slidesPerView: 2
        },
        "640": {
            slidesPerView: 3,
        },
        "1000": {
            slidesPerView: 4
        }
    }
    return (
        <>
            <HeadingAOS title={"movies"}>Movies</HeadingAOS>

            <Visible run={false}>
                <div className="home-movies-cards">
                    <div className="home-movies-cards-center">
                        <Swiper effect={'coverflow'} grabCursor={true} breakpoints={breakpoints} centeredSlides={true} slidesPerView={1} coverflowEffect={{
                            "rotate": 50,
                            "stretch": 0,
                            "depth": 100,
                            "modifier": 1,
                            "slideShadows": false
                        }} pagination={false} className="mySwiper" loop={true} autoplay={{delay: 2000}}
                            onActiveIndexChange={(en) => console.log(en.activeIndex, 'slide Changed')}
                        >
                            <SwiperSlide className='home-movies-cards-center-items' >
                                <img src="https://dancemaster.in/demo/wp-content/uploads/2021/11/latest-realse-1-768x768.jpg" />
                                <div className="detail">
                                    <h3>Movie Name</h3>
                                    <p>SubDetail</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='home-movies-cards-center-items' >
                                <img src="https://dancemaster.in/demo/wp-content/uploads/2021/11/latest-realse-2-768x768.jpg" />
                                <div className="detail">
                                    <h3>Movie Name</h3>
                                    <p>SubDetail</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='home-movies-cards-center-items' >
                                <img src="https://dancemaster.in/demo/wp-content/uploads/2021/11/latest-realse-1-768x768.jpg" />
                                <div className="detail">
                                    <h3>Movie Name</h3>
                                    <p>SubDetail</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='home-movies-cards-center-items' >
                                <img src="https://dancemaster.in/demo/wp-content/uploads/2021/11/latest-realse-1-768x768.jpg" />
                                <div className="detail">
                                    <h3>Movie Name</h3>
                                    <p>SubDetail</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='home-movies-cards-center-items' >
                                <img src="https://dancemaster.in/demo/wp-content/uploads/2021/11/latest-realse-2-768x768.jpg" />
                                <div className="detail">
                                    <h3>Movie Name</h3>
                                    <p>SubDetail</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </Visible>
        </>
    )
}

export default Movies
