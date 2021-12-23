import { SwiperSlide, Swiper } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import { useEffect, useRef, useState } from 'react'
import { HeadingAOS, Visible } from '../hooks'
import TestimmonialVideo from './TestimmonialVideo'
import Image from 'next/image'
import { useDispatch } from "react-redux"
import { blurBackground } from "../../../../redux/action"


SwiperCore.use([Autoplay])

const Testimonial = () => {
    
    const [show, setShow] = useState(false)
    const onClickHandler = () => {
        setShow(true)
    }
    const dispatch = useDispatch()
    
    const breakpoints = {
        "710": {
            slidesPerView: 2
        },
        "1100": {
            slidesPerView: 3
        }
    }
    useEffect(()=>{
        localStorage.setItem('blur',show)
        dispatch(blurBackground(show))
    },[show,dispatch])
    
    return (
        <>
            <HeadingAOS title={"testimonial"}>
                Testimonial
            </HeadingAOS>
            <Visible run={false} >
                <div className="pad-3 scale-up-center" >
                    <div className="home-testimonial-content">
                        <Swiper loop={true} slidesPerView={1} spaceBetween={50} breakpoints={breakpoints} autoplay speed={600}>
                            <SwiperSlide className='home-testimonial-content-item' onClick={onClickHandler}>
                                <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1628828164/samples/bike.jpg"} width={560} height={320} />
                                <div className="play-button" >
                                    <div className="play-button-circle" >
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='home-testimonial-content-item' onClick={onClickHandler}>
                                <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1628828164/samples/bike.jpg"} width={560} height={320} />
                                <div className="play-button" >
                                    <div className="play-button-circle" >
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='home-testimonial-content-item' onClick={onClickHandler}>
                                <Image src={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1628828164/samples/bike.jpg"} width={560} height={320} />
                                <div className="play-button" >
                                    <div className="play-button-circle" >
                                        <i className="fas fa-play"></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                    </div>

                </div>
            </Visible>
            {show && (
                <TestimmonialVideo link={"https://dancemaster.in/demo/wp-content/uploads/2021/12/standalone.mp4"} setShow={setShow} show={show}  />
                // <TestimmonialVideo link={"Axmg1E4HrVE"} iframe={true} setShow={setShow} />
            )}

        </>
    )
}

export default Testimonial
