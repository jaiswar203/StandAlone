import Link from 'next/link'
import { SwiperSlide, Swiper } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import Image from 'next/image'
import Aos from 'aos'
import { useEffect } from 'react'

SwiperCore.use([Autoplay])

const Carousel = ({ data, heading,speed }) => {
    const breakpoints = {
        "380": {
            slidesPerView: 2
        },
        "600": {
            slidesPerView: 3
        },
        "900":{
            slidesPerView: 4
        },
        "1100":{
            slidesPerView: 5
        },
        "1300":{
            slidesPerView: 6
        },
        "1600":{
            slidesPerView: 7
        },
    }
    useEffect(()=>{
       Aos.init() 
    },[])
    return (
        <>
            <div className="movies-carousel-heading">
                <h2>{heading}</h2>
                <Link href={"#"}>
                    <h4>See More</h4>
                </Link>
            </div>
            <div className="movies-carousel-content" data-aos="zoom-in-up">
                <Swiper slidesPerView={1} spaceBetween={10} autoplay speed={ speed ? speed : 600} breakpoints={breakpoints} >
                    {
                        data.map((d,i) => (
                            <SwiperSlide className='movies-carousel-content-item' key={i}>
                                <Image src={d.link} width={200} height={300} />
                                <div className="detail">
                                    <h3>{d.name}</h3>
                                    <div className="rating">
                                        <i className="fas fa-star" />
                                        <p>{d.rating}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </>
    )
}

export default Carousel
