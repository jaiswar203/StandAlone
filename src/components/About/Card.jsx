import Image from "next/image"

const Card = ({ img }) => {
    return (
        <div className="card" data-aos="zoom-in">
            <div className="card__content">
                <div className="card__front" style={{backgroundImage:`url(${img})`}}>
                    <h3 className="card__title">Jhon Doe</h3>
                    <p className="card__subtitle">Web Developer</p>
                </div>
                <div className="card__back">
                    <p className="card__body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia tempora neque rerum. Obcaecati laboriosam harum vel possimus magnam facilis laudantium distinctio? Architecto sed tenetur ratione optio. Obcaecati dolores unde saepe.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Card
