import { useState } from "react"
import Visible from "./Visible"
import Typist from "react-typist"
import HeadingAOS from "./HeadingAOS"

const MidVid = () => {
    const [isVis, setIsVis] = useState(false)
    
    return (
        <>
            <div className="home-midvid-heading">
                <HeadingAOS>Info</HeadingAOS>
            </div>
            <Visible setIsVis={setIsVis}>
                <div className="home-midvid-video">
                    <video src={"https://res.cloudinary.com/dykwfe4cr/video/upload/v1639932598/Trailers/waves_on_the_beach_ordco7.mp4"} loop autoPlay muted />
                    <div className="home-midvid-video-detail">
                        <Typist avgTypingDelay={65} cursor={{show: false}}>
                        <h1>A Beautyfull place to explore</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non pariatur, aut, harum inventore quibusdam molestias minima aperiam dolorem assumenda neque cumque quam qui fugit, quas vero totam quia voluptatibus.</p>
                        </Typist>
                    </div>
                </div>
            </Visible>
        </>
    )
}

export default MidVid
