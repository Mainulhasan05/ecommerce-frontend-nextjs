import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react"
import Navbar from "../../Components/Navbar/Navbar";
import store from "../../store/store";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  return <>
  <Provider store={store}>
    <Analytics/>
  <Navbar/>
  <Component {...pageProps} />
  </Provider>
  </>
}
