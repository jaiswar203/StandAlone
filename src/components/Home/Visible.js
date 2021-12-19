import ReactVisibilitySensor from "react-visibility-sensor"


const Visible = ({children,setIsVis}) => {
    
    const onChan = (isVisible) => {
        if (isVisible) {
            setIsVis(true)
        }
    }
    return (
        <>
            <ReactVisibilitySensor onChange={onChan}>
                {children}
            </ReactVisibilitySensor>
        </>
    )
}

export default Visible
