import React, { useEffect, useRef, useState } from 'react'
import Typist from 'react-typist'
import Aos from 'aos'


import 'aos/dist/aos.css'
import Visible from './Visible'

const About = () => {
    const [isVis, setIsVis] = useState(false)
    const [comp1, setComp1] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [isVis])
    return (
        <>
            <div className="home-about">
                <div className="home-about-heading">
                    <h1 data-aos="fade-up">About</h1>
                </div>
                <Visible setIsVis={setIsVis}>
                    <div className="home-about-section ">
                        <div className="section " data-aos="zoom-in-up">
                            <div className="section-image">
                                <img src="https://dancemaster.in/demo/wp-content/uploads/2021/11/team_5.png" alt="" data-aos="zoom-out-down" />
                            </div>
                            <div className="section-detail">
                                <p>
                                    The Standalone Film Festival & Awards is one of the most Biggest International Independent film festival Awards . It provides a common platform for the cinemas of the world to project the excellence of the motion picture industry. SFFA is designed for the independent films across the world giving them a platform to launch their movie worldwide.
                                </p>
                                <div className="section-detail-vision">
                                    {isVis && (
                                        <Typist cursor={{ show: false }} onTypingDone={() => setComp1(true)} avgTypingDelay={90}>
                                            <h3 className='section-detail-heading'>Vison</h3>
                                            <p>To make the dream come true of the independent movie...</p>
                                        </Typist>
                                    )}
                                </div>
                                <div className="section-detail-mission">
                                    {
                                        comp1 && (
                                            <>
                                                {isVis && (
                                                    <Typist cursor={{ show: false }} avgTypingDelay={90}>
                                                        <h3 className='section-detail-heading'>Mission</h3>
                                                        <p>To support Independent movie makers across globe to showcase their talent..</p>
                                                    </Typist>

                                                )}
                                            </>

                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </Visible>

            </div>
        </>
    )
}

export default About
