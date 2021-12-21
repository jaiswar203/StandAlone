
import { useRef, useEffect, useState } from 'react'
import useIntersection from './hooks/useIntersection'
import { Movies,MidVid,Testimonial,Upcoming,About } from './SubComponent' 

const Home = () => {
    const vid=useRef()
    const [volume, setVolume] = useState(false)
    useIntersection(vid,volume)
    return (
        <div className="home">
            <div className="home-video scale-up-center">
                <video src="https://dancemaster.in/demo/wp-content/uploads/2021/12/standalone.mp4" autoPlay muted ref={vid} />
                {
                    volume ? (
                        <div className="home-video-unmute" onClick={() => setVolume(false)}>
                            <i className="fas fa-volume-up"></i>
                        </div>
                    ) : (
                        <div className="home-video-mute" onClick={() => setVolume(true)}>
                            <i className="fas fa-volume-mute"></i>
                        </div>
                    )
                }
            </div>
            <div className="home-movies">
                <Movies />
            </div>
            <div className="home-about">
                <About />
            </div>
            <div className="home-midvid">
                <MidVid />
            </div>
            <div className="home-upcoming">
                <Upcoming />
            </div>
            <div className="home-testimonial">
                <Testimonial />
            </div>
        </div>

    )
}

export default Home