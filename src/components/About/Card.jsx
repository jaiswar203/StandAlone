import Image from "next/image"

const Card = ({ img }) => {
    return (
        <div className="card">
            <div className="layer">
                <Image src={img} width={200} height={200} objectFit="contain" />
                <h1>Jhon Doe</h1>
            </div>
            <div className="info">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
                    reprehenderit minus. Natus quidem itaque aspernatur labore deserunt beatae
                    adipisci amet soluta incidunt consequatur?
                </p>
                <ul>
                    <li>
                        <i className="fab fa-linkedin"></i>
                    </li>
                    <li>
                        <i className="fab fa-facebook"></i>

                    </li>
                    <li>
                        <i className="fab fa-instagram"></i>

                    </li>
                    <li>
                        <i className="fab fa-twitter"></i>

                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card
