import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination"
import SwiperCore, {
    Pagination
} from 'swiper';
import Image from "next/image";

SwiperCore.use([Pagination]);

const Event = () => {
    return (
        <div className='event'>
            <div className="event-carousel">
                <Swiper pagination={true}>
                    <SwiperSlide >
                        <img src="https://res.cloudinary.com/dykwfe4cr/image/upload/v1640434586/photo-1492684223066-81342ee5ff30_buozpk.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="https://res.cloudinary.com/dykwfe4cr/image/upload/v1640434586/photo-1492684223066-81342ee5ff30_buozpk.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src="https://res.cloudinary.com/dykwfe4cr/image/upload/v1640434586/photo-1492684223066-81342ee5ff30_buozpk.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Event
