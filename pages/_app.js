import "../src/styles/css/index.css";
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
