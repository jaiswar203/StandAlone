import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'aos/dist/aos.css'


import "swiper/css";
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"




// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow, Pagination
} from 'swiper';
import HeadingAOS from './HeadingAOS';


SwiperCore.use([EffectCoverflow, Pagination]);

const Movies = () => {
    
    const breakpoints={
        "410":{
            slidesPerView:2
        },
        "640": {
            slidesPerView: 3,
        },
        
    }
    return (
        <>
            <div className="home-movies-heading">
                <HeadingAOS>Movies</HeadingAOS>
            </div>
            <div className="home-movies-cards" data-aos="zoom-in-up">
                <div className="home-movies-cards-center">
                    <Swiper effect={'coverflow'} grabCursor={true}  breakpoints={breakpoints} centeredSlides={true} slidesPerView={1} coverflowEffect={{
                        "rotate": 50,
                        "stretch": 0,
                        "depth": 100,
                        "modifier": 1,
                        "slideShadows": false
                    }} pagination={false} className="mySwiper" loop={true}>
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
        </>
    )
}

export default Movies
