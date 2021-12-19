
import { useRef, useEffect, useState } from 'react'
import Movies from './Movies'
import About from './About'
import MidVid from './MidVid'
import Upcoming from './Upcoming'

const Home = () => {
    const [volume, setVolume] = useState(false)
    const vid = useRef()
    const callbackFuntion = (entries) => {
        entries.forEach((en) => {
            if (!en.isIntersecting) {
                vid.current.pause();
            } else {
                vid.current.play();
            }
        })
    }
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    }
    useEffect(() => {
        if (volume) {
            vid.current.muted = false
        } else {
            vid.current.muted = true
        }
        const observer = new IntersectionObserver(callbackFuntion, options);
        observer.observe(vid.current);

        if (window.hidden) {
            vid.current.pause()
        } else {
            vid.current.play()
        }
    }, [volume, options])

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
        </div>

    )
}

export default Home