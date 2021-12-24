
import { SwiperSlide, Swiper } from 'swiper/react'
import SwiperCore, { Autoplay, EffectCoverflow } from 'swiper'
import { useEffect, useState } from "react";
import Modal from "./Modal";


SwiperCore.use([EffectCoverflow, Autoplay]);
const Grid = ({ data }) => {
    const [img, setImg] = useState(null)
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
    console.log({img})
    useEffect(()=>{

    },[img])
    return (
        <>
            <div className="gallery-content-heading">
                <h1>Top Rated </h1>
            </div>
            <div className="gallery-content-img">
                <Swiper effect={'coverflow'} grabCursor={true} breakpoints={breakpoints} centeredSlides={true} slidesPerView={1} coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": false
                }} pagination={false} className="mySwiper" loop={true} autoplay={{ delay: 2000 }}
                    onActiveIndexChange={(en) => console.log(en.activeIndex, 'slide Changed')}
                    speed={600}
                    
                >
                    {
                        data.map((d, i) => (
                            <SwiperSlide className='movies-carousel-content-item' key={i} onClick={()=>setImg(d.link)}>
                                <img src={d.link} width={200} />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
            <Modal img={img} />
        </>
    )
}

export default Grid
