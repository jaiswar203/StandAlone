import Image from "next/image"



const Card = ({link,aos}) => {
    
    return (
        <div className="item-container" data-aos={aos ? aos : "zoom-in-up"}>
            <div className="img-container">
                <Image src={link} width={600} height={770} objectFit="contain" alt="Event image" />
            </div>
            <div className="body-container" >
                <div className="overlay" />
                <div className="event-info">
                    <p className="title">The Overstory</p>
                    <div className="separator" />
                    <p className="info">New York, NY</p>
                    <p className="price">29$</p>
                    <div className="additional-info">
                        <p className="info">
                            <i className="fas fa-map-marker-alt" />
                            245 W 52nd St, New York
                        </p>
                        <p className="info">
                            <i className="far fa-calendar-alt" />
                            Sat, Sep 19, 10:00 AM EDT
                        </p>
                        <p className="info description">
                            Welcome! Everyone has a unique perspective after reading a book, and
                            we would love you to share yours with us! We meet one Sunday evening{" "}
                            
                        </p>
                    </div>
                </div>
                <button className="action">Visit</button>
            </div>
        </div> 
    )
}

export default Card
