import '@/styles/globals.css'
import  { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import LoadingScreen from "./loader"

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  
  const delay = setTimeout(() => {
    setLoading(false);
    clearTimeout(delay);
  }, 6000);

  
  return () => clearTimeout(delay);
}, []);

return (
  <>
    {loading ? (
      <LoadingScreen />
    ) : (
      <>
        <Component {...pageProps} />
        <Toaster />
      </>
    )}
  </>
  )

}
