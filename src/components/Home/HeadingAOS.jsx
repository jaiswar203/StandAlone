import Aos from "aos"
import { useEffect } from "react"

const HeadingAOS = ({children}) => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <h1 data-aos="fade-up">
            {children}
        </h1>
    )
}

export default HeadingAOS
