import Image from "next/image"
import Aos from "aos"
import { useEffect, useState } from "react"
import Typist from "react-typist"

import SwiperCore, { Autoplay } from 'swiper'
import Card from "./Card"

SwiperCore.use([Autoplay])

const About = () => {
    const [animate, setAnimate] = useState(false)
    useEffect(() => {
        const { innerWidth } = window

        if (innerWidth <= 952) {
            setAnimate(true)
        } else {
            setAnimate(false)
        }
        Aos.init()

    }, [animate])

    return (
        <div className='about'>
            <div className="about-title">
                <h1>About</h1>
            </div>
            <div className="about-intro" data-aos="zoom-in">
                <div className="about-intro-detail">
                    <div className="about-intro-detail-title">
                        <Typist cursor={{ show: false }} avgTypingDelay={100}>
                            <h1>Mr Khullar</h1>
                        </Typist>
                    </div>
                    <div className="about-intro-detail-content">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro labore doloremque fugit corrupti? Nulla illum eius odit? Maxime accusantium reiciendis tempora voluptatibus, molestiae, et excepturi ipsa quibusdam officiis fugiat architecto?
                            Quisquam, nesciunt incidunt mollitia expedita accusamus quos voluptatem distinctio ducimus accusantium a laudantium explicabo dolore consectetur, voluptatibus ratione, quasi similique libero amet nobis quaerat. Eveniet quibusdam vel soluta nisi ex?
                            Debitis tempore rerum neque, aspernatur necessitatibus aliquam dicta accusantium tenetur quasi eaque deserunt labore optio? Voluptatum nemo repellendus commodi reiciendis libero adipisci neque. Sapiente hic incidunt, numquam ipsa voluptatibus dolores!</p>


                    </div>
                </div>
                <div className="about-intro-image">
                    <div className="about-intro-image-outer">
                        <Image src="https://res.cloudinary.com/dykwfe4cr/image/upload/v1640203681/team_5_lhdhzb.png" height={500} width={500} objectFit="cover" />
                    </div>
                </div>
            </div>
            <div className="about-detail">
                <div className="about-detail-vision" data-aos={`zoom-in`} >
                    <div className="about-detail-vision-title">
                        <h2>Vision</h2>
                    </div>
                    <div className="about-detail-vision-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, tempora repellat architecto accusamus beatae nisi aspernatur. Nam beatae dicta, dolorem rem ducimus repellat eaque, sunt placeat ab amet, quae laudantium?</p>
                    </div>
                </div>
                <div className="about-detail-mission" data-aos={`zoom-in-down`}>
                    <div className="about-detail-mission-title">
                        <h2>Mission</h2>
                    </div>
                    <div className="about-detail-mission-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, tempora repellat architecto accusamus beatae nisi aspernatur. Nam beatae dicta, dolorem rem ducimus repellat eaque, sunt placeat ab amet, quae laudantium?</p>
                    </div>
                </div>
            </div>

            <div className="about-team">
                <div className="about-team-title" data-aos="zoom-in">
                    <h1>Our Team</h1>
                </div>
                <div className="about-team-content" data-aos="zoom-in">
                    <Card img={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640203681/team_5_lhdhzb.png"} />
                    <Card img={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640203681/team_5_lhdhzb.png"} />
                    <Card img={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640203681/team_5_lhdhzb.png"} />
                    <Card img={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640203681/team_5_lhdhzb.png"} />
                    <Card img={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640203681/team_5_lhdhzb.png"} />
                    <Card img={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640203681/team_5_lhdhzb.png"} />
                    <Card img={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640203681/team_5_lhdhzb.png"} />
                    <Card img={"https://res.cloudinary.com/dykwfe4cr/image/upload/v1640203681/team_5_lhdhzb.png"} />
                    
                </div>
            </div>
        </div>
    )
}

export default About
