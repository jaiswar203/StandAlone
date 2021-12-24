
import { useEffect, useState } from "react"
import { data } from "../../db/data"
import Grid from "./Grid"

import Modal from "./Modal";

import Aos from "aos"
import Filter from "./Filter";


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
        Aos.init()
    }, [blur, img])
    
    return (
        <>
            <div className="gallery" data-aos="zoom-in-up">
                <div className={`gallery-content ${blur ? "blur" : ""}`}>
                    <Grid data={data.gallery} setBlur={setBlur} setImg={setImg} />
                </div>
                <div className="gallery-filter">
                    <Filter />
                </div>
            </div>
            <Modal img={img} setBlur={setBlur} setImg={setImg} />

        </>
    )
}

export default Gallery
