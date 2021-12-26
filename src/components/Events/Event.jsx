import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination"
import "swiper/css/navigation"
import { data } from "../../db/data";
import SwiperCore, {
    Pagination, Navigation
} from 'swiper';
import Image from "next/image";

SwiperCore.use([Pagination, Navigation]);

const Event = () => {
    const breakpoints = {
        "420":{
            slidesPerView: 2
        },
        "700":{
            slidesPerView: 3
        },
        "1200":{
            slidesPerView: 4
        },
    }
    return (
        <div className='event'>
            <div className="event-carousel">
                <Swiper navigation={true} pagination={true} autoplay={{ delay: 3000 }} speed={1000} loop={true}>
                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/dykwfe4cr/image/upload/v1640458452/slide3_fkpejr.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/dykwfe4cr/image/upload/v1640458452/slide3_fkpejr.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://res.cloudinary.com/dykwfe4cr/image/upload/v1640458452/slide3_fkpejr.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="event-jury">
                <div className="event-jury-heading">
                    <h1>Our Jury Member</h1>

                </div>
                <div className="event-jury-carousel">
                    <Swiper slidesPerView={1} loop={false} spaceBetween={10} autoplay={{ delay: 3000 }} speed={1000} breakpoints={breakpoints}>
                        {data.person.map((d,i) => (
                            <SwiperSlide className='item' key={i}>
                                <Image src={d.link} alt={d.link} width={300} height={300} />
                            </SwiperSlide>
                        ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Event
