import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react"
import Navbar from "../../Components/Navbar/Navbar";
import store from "../../store/store";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Footer from "../../Components/Footer/Footer";
export default function App({ Component, pageProps }) {
  return <>
  <Provider store={store}>
    <Analytics/>
    <Toaster position="top-right"/>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </Provider>
  </>
}
