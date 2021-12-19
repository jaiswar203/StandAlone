import "../src/styles/css/index.css";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

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
          <HashLoader loading={loading} size={150} color={"#F79824"} / >
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default MyApp;
