import ReactVisibilitySensor from "react-visibility-sensor";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Visible = ({ children, setIsVis, run = true }) => {
  const onChan = (isVisible) => {
    if (run) {
      if (isVisible) {
        setIsVis(true);
      }
    }
  };
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <ReactVisibilitySensor onChange={onChan}>
        <div data-aos="zoom-in-up" data-aos-duration="2000" >
          {children}
        </div>
      </ReactVisibilitySensor>
    </>
  );
};

export default Visible;
