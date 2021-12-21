import { useEffect } from "react"

const useIntersection = (vid,volume) => {
    const run=(vid,volume)=>{
        const callbackFuntion = (entries) => {
            entries.forEach((en) => {
                if (!en.isIntersecting) {
                    vid.current.pause();
                } else {
                    vid.current.play();
                }
            })
        }
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        }
        useEffect(() => {
            if (volume) {
                vid.current.muted = false
            } else {
                vid.current.muted = true
            }
            const observer = new IntersectionObserver(callbackFuntion, options);
            observer.observe(vid.current);
    
            if (document.hidden) {
                vid.current.pause()
            } else {
                vid.current.play()
            }
        }, [volume])
    }
    return run(vid,volume)
}

export default useIntersection
