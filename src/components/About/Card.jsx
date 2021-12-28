import Image from "next/image"

const Card = ({ img }) => {
    return (
        <div className="card" data-aos="zoom-in">
            <div className="card__content">
                <div className="card__front" style={{ backgroundImage: `url(${img})` }}>
                    <h3 className="card__title">Jhon Doe</h3>
                    <p className="card__subtitle">Web Developer</p>
                </div>
                <div className="card__back">
                    <div className="card__body">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum cupiditate cumque numquam exercitationem accusantium aspernatur, hic doloremque repellat! Ad quod, vel veritatis eos officia sint non eaque iste dignissimos doloremque.</p>
                        <div className="links">
                            <a href="#">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href="#">
                                <i className="fab fa-facebook" />
                            </a>
                            <a href="#">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                                <i className="fab fa-pinterest" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
