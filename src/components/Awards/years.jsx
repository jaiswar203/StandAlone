import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"


const Years = ({ year, link, data, speed }) => {
    const breakpoints = {
        "350": {
            slidesPerView: 2
        },
        "700": {
            slidesPerView: 3
        },
        "900": {
            slidesPerView: 4
        },
        "1250": {
            slidesPerView: 5
        },
        "1400": {
            slidesPerView: 6
        },
    }
    return (
        <>
            <div className="awards-dates-content-heading" data-aos="zoom-in">
                <h1>{year}</h1>
                <Link passHref href={`/awards/${link}`}>
                    <i className="fas fa-arrow-right" />
                </Link>
            </div>
            <div className="awards-dates-content-carousel" data-aos="zoom-in">
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

export default Years
