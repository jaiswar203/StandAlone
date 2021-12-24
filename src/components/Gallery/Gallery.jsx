
import { useEffect, useState } from "react"
import { data } from "../../db/data"
import Grid from "./Grid"

import Modal from "./Modal";


const Gallery = () => {
    const [blur, setBlur] = useState(false)
    const [img, setImg] = useState(null)
    useEffect(() => {
        const gallery = document.querySelector('footer')
        if (blur) {
            gallery.classList.add('blur')
        } else {
            gallery.classList.remove('blur')
        }
    }, [blur,img])
    console.log(blur)
    return (
        <>
            <div className="gallery">
                <div className={`gallery-content ${blur ? "blur" : ""}`}>
                    <Grid data={data.gallery} setBlur={setBlur} setImg={setImg} />
                </div>
            </div>
            <Modal img={img} setBlur={setBlur} setImg={setImg} />
        </>
    )
}

export default Gallery
