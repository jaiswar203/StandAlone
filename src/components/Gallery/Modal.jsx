import Image from "next/image"

const Modal = ({img}) => {
    if(img===null){
        return null
    }
    return (
        <div className="gallery-modal">
            <Image src={img} alt="" width={1920} height={1080} />
        </div>
    )
}

export default Modal
