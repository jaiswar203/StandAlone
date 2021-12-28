import Image from 'next/image'
import {useEffect} from 'react'
import Aos from 'aos'

const Detail = ({ data }) => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className='movies-details' >
            <div className="movies-details-heading" data-aos="zoom-in-up">
                <h1>Top Rated</h1>
            </div>
            <div className="movies-details-grid">
                {data.map((d) => (
                    <div className='movies-details-grid-item' data-aos="zoom-in-up" >
                        <Image src={d.link} width={200} height={300} />
                        <div className="detail">
                            <h3>{d.name}</h3>
                            <div className="rating">
                                <i className="fas fa-star" />
                                <p>{d.rating}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Detail
