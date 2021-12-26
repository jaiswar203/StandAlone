import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"
import Aos from "aos"
import { useEffect } from "react"

const Detail = ({ data,speed,title }) => {
    const breakpoints={
        "350":{
            slidesPerView: 2
        },
        "700":{
            slidesPerView: 3
        },
        "900":{
            slidesPerView: 4
        },
        "1250":{
            slidesPerView: 5
        },
        "1400":{
            slidesPerView: 6
        },
    }
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <>
            <div className="awards-detail-heading" >
                <h1>{title}</h1>
            </div>
            <div className="awards-detail-carousel" data-aos="zoom-in-up">
                <Swiper slidesPerView={1} loop={true} spaceBetween={10} autoplay={{ delay: 3000 }} speed={speed ? speed : 600} breakpoints={breakpoints}>
                    {data.map((d) => (
                        <SwiperSlide className='item' key={d.name}>
                            <Image src={d.link} alt={d.name} width={300} height={450} />
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        </>
    )
}

export default Detail
