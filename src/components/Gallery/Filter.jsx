import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { data } from '../../db/data'

const Filter = () => {
    const [num, setNum] = useState(null)
    const [filterData, setFilterData] = useState(null)
    const category=[
        {
            id: 0,
            name: 'All',
            
        },
        {
            id: 1,
            name: 'News',
            
        },
        {
            id: 2,
            name: 'Lazarus',
            
        },
        {
            id: 3,
            name: 'Pit',
            
        },
        {
            id: 4,
            name: 'Zeus',
            
        },
        {
            id: 5,
            name: 'DarkSeid',
            
        },
    ]
    const onClickHandler=(d,i)=>{
        setNum(i)
        setFilterData(d.name)
    }
    
    const newData= filterData ? data.gallery.filter((d)=> filterData === d.category.find((d)=> d===filterData)) : data.gallery
    useEffect(()=>{
        // if(num!==null){
        //     category.map((d)=>{
        //         if(num===d.id){
        //             ({...d,isActive: true})
                    
        //         }
        //     })
        // }
        
    },[num,filterData,newData])
    return (
        <>
            <div className="gallery-filter-nav">
                {
                    category.map((d,i) => (
                        <h4 key={i} onClick={()=>onClickHandler(d,i)}>
                            {d.name}
                        </h4>
                    ))
                }
            </div>
            <div className="gallery-filter-content">
                {newData.map((d)=>(
                    <Image src={d.link} width={300} height={300} />
                ))}
            </div>
        </>
    )
}

export default Filter
