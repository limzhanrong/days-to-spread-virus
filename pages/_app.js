import '../styles/globals.css'
// import '../styles/Home.module.css'

import { AppContextProvider } from "global/StateContext"

function MyApp({ Component, pageProps }) {
  return (
  <AppContextProvider>
    <Component {...pageProps} />
  </AppContextProvider>
  )
}

export default MyApp
