import React from 'react'
import {Carousel} from './subComponents'
import { data } from '../../db/data'

const Movies = () => {
    // https://www.omdbapi.com/?i=${omdb}&apikey=8bfd72e1
    
    return (
        <div className='movies'>
            <div className="movies-carousel">
                <Carousel data={data.datas} heading={"Top Rated"} />
            </div>
            <hr />
            <div className="movies-carousel1">
                <Carousel data={data.datas} heading={"HollyWood"} speed={800} />
            </div>
            <hr />
            <div className="movies-carousel2">
                <Carousel data={data.datas} heading={"BollyWood"} speed={1000} />
            </div>
        </div>
    )
}

export default Movies
