import Image from "next/image"
import Aos from "aos"
import { useEffect } from "react"

const Modal = ({ img, setBlur, setImg }) => {
    useEffect(()=>{
        Aos.init()
    },[])
    if (img === null) {
        return null
    }
    return (
        <div className="gallery-modal" data-aos="zoom-in-up">
            <Image src={img} alt="" width={1920} height={1080} />
            <div className="cancel-btn" onClick={() => {
                setBlur(false)
                setImg(null)
            }}>
                <i className="fas fa-times"></i>
            </div>
        </div>
    )
}

export default Modal
