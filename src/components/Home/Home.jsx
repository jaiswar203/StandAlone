
import { useRef, useEffect, useState } from 'react'
import ReactVisibilitySensor from 'react-visibility-sensor'

import { Movies, MidVid, Testimonial, Upcoming, About } from './SubComponent'

const Home = () => {
  const vid = useRef()
  const [volume, setVolume] = useState(false)

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  useEffect(() => {
    if (vid !== undefined) {
      if (volume) {
        vid.current.muted = false;
      } else {
        vid.current.muted = true;
      }

      if (document.hidden) {
        vid.current.pause();
      } else {
        vid.current.play();
      }
    }
  }, [volume]);
  const ChangeHandler = (visible) => {
    if (!visible) {
      vid.current.pause()
    } else {
      vid.current.play()
    }
  }
  return (
    <div className="home">
      <ReactVisibilitySensor onChange={ChangeHandler}>
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
      </ReactVisibilitySensor>
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
      <div className="home-submit">

      </div>
    </div>

  )
}

export default Home