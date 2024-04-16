import "@/styles/globals.css";
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';
import { Analytics } from "@vercel/analytics/react"
import Navbar from "../../Components/Navbar/Navbar";
import store from "../../store/store";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import { useRef } from "react";
export default function App({ Component, pageProps }) {
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };
  return <>
    <Provider store={store}>
      <Analytics />
      <Toaster position="top-right" />
      <TawkMessengerReact
        propertyId={process.env.TWAK_PROPERTY_ID}
        widgetId={process.env.TWAK_WIDGET_ID}
        ref={tawkMessengerRef}
      />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  </>
}
