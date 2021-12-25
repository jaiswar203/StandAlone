import {Swiper,SwiperSlide} from "swiper/react"
import SwiperCore ,{Navigation ,Pagination,Autoplay} from 'swiper'
import Years from "./years"
import { data } from "../../db/data"
import Aos from "aos"

import "swiper/css/navigation"
import "swiper/css/pagination"
import { useEffect } from "react"

SwiperCore.use([Navigation,Pagination,Autoplay])

const Awards = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className='awards'>
            <div className="awards-carousel">
                <Swiper navigation={true} pagination={true} autoplay={{delay: 3000}} speed={1000} loop={true}>
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
            <div className="awards-dates">
                <div className="awards-dates-heading">
                    <h1>Awards</h1>
                </div>
                <div className="awards-dates-content">
                    <Years year={2021} link={"2021"} data={data.datas} speed={600}/>
                    <Years year={2020} link={"2020"} data={data.datas} speed={800} />
                </div>
            </div>
        </div>
    )
}

export default Awards
