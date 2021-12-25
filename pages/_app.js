import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import "../src/styles/css/index.css";
import "aos/dist/aos.css";
import "swiper/css";
import "animate.css";

import reducer from "../redux/reducer";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

function MyApp({ Component, pageProps }) {
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, [4000]);
  }, [loading]);
  return (
    <>
      {loading ? (
        <div className="loader">
          <HashLoader loading={loading} size={150} color={"#F79824"} />
        </div>
      ) : (
        <Provider store={store}>
          <Component {...pageProps} loading={loading} />
        </Provider>
      )}
    </>
  );
}

export default MyApp;
