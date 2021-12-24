import Image from "next/image"

const Grid = ({ data }) => {
    return (
        <>
            <div className="gallery-content-heading">
                Gallery
            </div>
            <div className="gallery-content-img">
                {
                    data.map((d,i) => (
                        <div className="gallery-content-img-item" key={i}>
                            {/* <Image src={d.link} layout="fill" className="image" /> */}
                            <img src={d.link} alt="" />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Grid
