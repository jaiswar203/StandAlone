
import { data } from "../../db/data"
import Grid from "./Grid"

const Gallery = () => {
    
    return (
        <div className="gallery">
            <div className="gallery-content">
                <Grid data={data.gallery} />
            </div>
        </div>
    )
}

export default Gallery
