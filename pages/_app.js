import '../styles/globals.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
