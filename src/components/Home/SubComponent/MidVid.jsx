import { useState } from "react"
import { HeadingAOS, Visible } from "../hooks"
import Typist from "react-typist"

const MidVid = () => {
    const [isVis, setIsVis] = useState(false)

    return (
        <>
            <HeadingAOS title={"midvid"}>Standalone</HeadingAOS>
            <Visible setIsVis={setIsVis}>
                <div className="home-midvid-video">
                    <video src="https://res.cloudinary.com/standalone/video/upload/v1642352801/samples/WhatsApp_Video_2022-01-16_at_22.35.21_vsepvp.mp4" loop autoPlay muted />
                    <div className="home-midvid-video-detail">
                        <Typist avgTypingDelay={65} cursor={{ show: false }}>
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
